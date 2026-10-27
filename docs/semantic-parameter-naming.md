# Verified parameter roles across rebuilt clients

The canonical Webpack source remains unchanged. The AST reconstruction emits readable TypeScript and records the evidence for accepted semantic parameter names.

A parameter identity is the tuple of a verified exported class name, its declared method name and the parameter index. Scope numbering and minifier-assigned variables do not establish identity. The AST transformation follows the actual parameter binding and all its lexical references, so imports and parameters can be renamed without rewriting public property names, JSON wire fields or class exports.

The role resolver only accepts the following verified patterns:

- executeCommand(statusCode, responseFields) when the status is branched upon and payload is consumed or the pair is passed to the verified error handler.
- exec(commandResponse) when one array supplies indexed status and payload elements and the method handles errors.
- Inventory parser array arguments when the recognized parser consumes their length.
- Server response fields passed to JSON.parse.
- Event objects only where methods named on... access event properties such as target or type.

Every accepted role is recorded with method identity, argument index, confidence, and observed AST evidence. If the use pattern does not uniquely establish a role, the original mangled name is replaced by a neutral argument0, argument1, etc. That placeholder is stable with respect to scope numbering but is explicitly not a recovered semantic name.

The October 25 published main reconstruction covered 687 Commands and 1,848 class-method parameter positions. Only 1,312 were semantically named under this counting rule (71.0%). The new pipeline identifies 304 additional positions using the verified AST evidence, yielding 1,616 named roles (87.4%) and 232 unproven placeholders. The numbers include optional parameters and rest arguments and therefore differ from counts that only measure bare identifier arguments.

The full reproducible report is graphs/2026-10-16-parameter-roles.json. Run from tools/client-canonical:

    npm run reconstruct
    npm run parameter-audit
    npm run parameter-audit:check
    npm test
    npm run typecheck:compat

The tests simulate changed minifier parameter identifiers and ensure that generated semantic names remain identical, while unrelated arrays and unknown event objects do not receive guessed roles. Actual future client revisions still require direct module and behavior matching, and the original ActionScript developer-chosen local identifiers cannot be proven from the bundled scripts alone. The TypeScript compatibility build remains incomplete and is not a runnable replacement for the official client.
