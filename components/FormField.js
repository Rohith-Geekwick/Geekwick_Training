export default function FormField({ label, name, value, onChange }) {
  return (
    <div>
      <label>{label}</label><br/>
      <input name={name} value={value} onChange={onChange} />
    </div>
  );
}