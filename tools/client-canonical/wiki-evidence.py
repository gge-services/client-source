import json
import re
import sys
from pathlib import Path

wiki = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
root = Path(sys.argv[2])
out = Path(sys.argv[3])
codes = {(item["name"], item["code"]) for item in wiki["statusCodes"]}
methods = {item["symbol"] for item in wiki["gameLogicMethods"]}
lazy = {item["symbol"] for item in wiki["lazyInitializers"]}
wanted = set(wiki["symbols"])
status_hits = {}
methods_hits = {}
lazy_hits = {}
symbols_hits = {}
word_pattern = re.compile(r"\b[A-Za-z_$][\w$]{2,}\b")
enum_pattern = re.compile(r"\.([A-Z][A-Z0-9_]+)\s*=\s*(-?\d+)\]")
assign_pattern = re.compile(r"\b([A-Z][A-Za-z0-9_$]+)\.([A-Za-z_$][\w$]*)\s*=\s*function\b")

for bundle in ["Game.bundle", "ggs.dll"]:
    manifest = json.loads((root / "bundles" / bundle / "manifest.json").read_text(encoding="utf-8"))
    for entry in manifest["modules"]:
        file = root / "bundles" / bundle / entry["path"]
        for line_number, line in enumerate(file.read_text(encoding="utf-8").splitlines(), 1):
            reference = {"bundle": bundle, "path": entry["path"], "line": line_number}
            if bundle == "ggs.dll":
                for name, value in enum_pattern.findall(line):
                    if (name, int(value)) in codes:
                        status_hits.setdefault(name, reference)
                for class_name, name in assign_pattern.findall(line):
                    symbol = class_name + "." + name
                    if symbol in methods:
                        methods_hits.setdefault(symbol, reference)
                    if symbol in lazy:
                        lazy_hits.setdefault(symbol, reference)
            tokens = set(word_pattern.findall(line))
            for token in tokens.intersection(wanted):
                instances = symbols_hits.setdefault(token, [])
                if len(instances) < 2 and reference not in instances:
                    instances.append(reference)

missing_status = sorted({name for name, _ in codes} - set(status_hits))
missing_methods = sorted(methods - set(methods_hits))
missing_lazy = sorted(lazy - set(lazy_hits))
result = {
    "schemaVersion": 1,
    "snapshot": "2026-10-16",
    "sourceRepository": "gge-services/client-source",
    "sourceCommit": None,
    "coverage": {
        "statusCodes": [len(status_hits), len(codes)],
        "gameLogicMethods": [len(methods_hits), len(methods)],
        "lazyInitializers": [len(lazy_hits), len(lazy)],
        "symbols": [len(symbols_hits), len(wanted)],
    },
    "missing": {
        "statusCodes": missing_status,
        "gameLogicMethods": missing_methods,
        "lazyInitializers": missing_lazy,
    },
    "statusCodes": status_hits,
    "gameLogicMethods": methods_hits,
    "lazyInitializers": lazy_hits,
    "symbols": symbols_hits,
}
out.parent.mkdir(parents=True, exist_ok=True)
lines = ["{"]
for key in ["schemaVersion", "snapshot", "sourceRepository", "sourceCommit", "coverage", "missing"]:
    lines.append("  " + json.dumps(key) + ": " + json.dumps(result[key], sort_keys=True, separators=(",", ":")) + ",")
for section_index, section in enumerate(["statusCodes", "gameLogicMethods", "lazyInitializers", "symbols"]):
    lines.append("  " + json.dumps(section) + ": {")
    entries = sorted(result[section].items())
    for index, (key, value) in enumerate(entries):
        suffix = "," if index < len(entries) - 1 else ""
        lines.append("    " + json.dumps(key) + ": " + json.dumps(value, sort_keys=True, separators=(",", ":")) + suffix)
    lines.append("  }" + ("," if section_index < 3 else ""))
lines.append("}")
out.write_text("\n".join(lines) + "\n", encoding="utf-8")
print("COVERAGE", result["coverage"])
print("MISSING STATUS", missing_status[:10])
print("MISSING METHODS", missing_methods[:10])
print("MISSING LAZY", missing_lazy[:10])
