import { ChangeEventHandler } from "react";

const DataCard = ({
  display,
  label,
  value,
  multiline,
  onChange
}: {
  display?: string,
  label: string,
  value?: string,
  multiline?: Boolean,
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}) => {
  return (<div style={{
    padding: '1em 0.1em',
    color: 'black',
    display: display ?? 'flex',
    flexDirection: 'column',
  }}>
    <label style={{
      margin: '0.4em 0',
      fontSize: '13px',
      fontWeight: 'normal',
      paddingRight: '0.7em'
    }}>
      {label}
    </label>
    {
      multiline ? <textarea style={{
      border: 'none',
      padding: '0 0.4em',
      borderRadius: '5px',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      backgroundColor: '#eaeaea',
      lineHeight: '2.3',
      borderBottom: '1px solid black',
      outline: 'none',
      fontSize: '1em'
    }} onChange={onChange} value={value} /> : <input style={{
      border: 'none',
      padding: '0 0.4em',
      lineHeight: '2.3',
      borderRadius: '5px',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      backgroundColor: '#eaeaea',
      borderBottom: '1px solid black',
      outline: 'none',
      fontSize: '1em'
    }} onChange={onChange} value={value}/>}
  </div>);
}

export default DataCard;