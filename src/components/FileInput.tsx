const FileInput = ({
    label,
    value,
    multiline
  }: {
    label: string,
    value?: string,
    multiline?: Boolean
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
      <input type='file'/>
    </div>);
}

export default FileInput;
