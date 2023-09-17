export const Files = () => {
  return (
    <div className="file">
      <h1 className="file--heading">Generate Password</h1>
      <label className="file--label">Password</label>
      <br />

      <textarea className="file--password" rows={1} cols={20}>
        Th1s1smypa33word
      </textarea>
      <br />
      <label className="file--label"> Length</label>
      <input
        className="file--input"
        type="text"
        placeholder="Length of the password..."
      />
      <br />
      <label className="file--label"> Parameters</label>
      <br />
      <input type="radio" />
      <label className="radio--label">Capital Letters</label>
      <br />
      <input type="radio" />
      <label className="radio--label">Small Letters</label>
      <br />
      <input type="radio" />
      <label className="radio--label">Numbers</label>
      <br />
      <input type="radio" />
      <label className="radio--label">Symbols</label>
    </div>
  );
};
