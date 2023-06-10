import { ChangeEventHandler } from "react";

const FileInput = ({
  label,
  key,
  onChange
}: {
    label: string,
    key: string
    onChange: ChangeEventHandler<HTMLInputElement>
  }) => {
    return (
      <div style={{
      padding: '1em 0.1em',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <label style={{
        margin: '0.4em 0',
        fontSize: '13px',
        fontWeight: 'normal'
      }}>
        {label}
      </label>
        <input key={key} type='file' onChange={(event) => {
          event.preventDefault();
          onChange(event);
      }}/>
    </div>);
}

export default FileInput;
