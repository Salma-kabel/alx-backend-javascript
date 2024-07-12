export default function guardrail(mathFunction) {
  try {
    res = mathFunction()
    return [res, 'Guardrail was processed'];
  } catch (Error) {
    return [Error.message, 'Guardrail was processed'];
  }
}
