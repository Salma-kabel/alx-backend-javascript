export default function guardrail(mathFunction) {
  try {
    const res = mathFunction();
    return [res, 'Guardrail was processed'];
  } catch (err) {
    return [`err: ${err.message}`, 'Guardrail was processed'];
  }
}
