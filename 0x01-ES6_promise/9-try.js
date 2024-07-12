export default function guardrail(mathFunction) {
  try {
    res = mathFunction()
    return [res, 'Guardrail was processed'];
  } catch (Error) {
    return [`Error: ${Error.message}`, 'Guardrail was processed'];
  }
}
