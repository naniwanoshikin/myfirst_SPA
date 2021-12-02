import React from 'react';
// Contact

// スペース削除
// (@param, @return) = (string, 前後スペースなしstring)
function spa(string) {
  return string.replace(/^[ |　]+|[ |　]+$/g, ''); // sだと半角スペースが適用されず,,
}
// a@g.c形式であればtrue
// (@param, @return) = (string, bool)
function ad(string) {
  const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  return reg.test(string);
}

// オブジェクト（checkの状態のみ変更）
const radioItems = [
  { id: 0, check: false, input: "社員", output: "社員" },
  { id: 1, check: false, input: "アルバイト", output: "アルバイト" },
  { id: 2, check: false, input: "無職", output: "無職" },
];
export default class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 入力値
      name: "",
      mail: "",
      content: "",
      select: "", // age
      radio: radioItems, // radio
      // 確認画面で値（output）を取得用
      radioValue: "",
      // エラーメッセージ用
      hasNameError: false,
      hasMailError: false,
      hasAgeError: false,
      hasRadioError: false,
      hasContentError: false,
      isSubmitted: false, // 確認画面状態
    };
  }
  handleName(e) { // 名前を入力した時
    const inputValue = e.target.value;
    this.setState({
      name: inputValue, // string
      hasNameError: spa(inputValue) === "", // bool （未入力だとtrue つまり error）
    });
  }
  handleMail(e) { // emailを入力した時
    const inputValue = e.target.value;
    this.setState({
      mail: inputValue,
      hasMailError: spa(inputValue) === "",
    });
  }
  handleContent(e) { // 内容を入力した時
    const inputValue = e.target.value;
    this.setState({
      content: inputValue,
      hasContentError: spa(inputValue) === "",
    });
  }
  handleSelect(e) { // 年齢を選択した時
    const inputValue = e.target.value;
    this.setState({
      select: inputValue,
      hasAgeError: inputValue === "",
    });
  }
  // ラジオボタンを選択した時
  handleRadio(ee) { // param: クリックしたオブジェクト
    const radios = this.state.radio.map(item => { // stateのコピー
      return {
        id: item.id,
        check: (item.input === ee.input) ? true : false,
        input: item.input,
        output: item.output,
      };
    });
    this.setState({
      radio: radios, // 保持している値（現在）
      radioValue: ee.output, // 選択した値（確認画面用）
      hasRadioError: false,  // エラーメッセージを消す。
    });
    // console.log(ee.input); // 選択した値
    // console.log(this.state.radio); // 保持している値（クリック前）
  }
  handleConfirm(e) { // バリデーション（確認ボタン押した時）
    e.preventDefault();
    if (!this.state.name) { // 未入力ならエラーメッセージを表示
      this.setState({ hasNameError: true });
    }
    if (!this.state.mail) {
      this.setState({ hasMailError: true });
    }
    if (!this.state.content) {
      this.setState({ hasContentError: true });
    }
    if (!this.state.select) {
      this.setState({ hasAgeError: true, select: "未回答" });
    }
    if (!this.state.radioValue) { // checkしていなければ、
      // console.log('radioValueが空です');
      this.setState({ hasRadioError: true });
    }
    if (!this.state.name || !ad(this.state.mail) || !this.state.radioValue || !this.state.content) {
      return;
    }
    this.setState({ isSubmitted: true });
  }
  handleFix(e) { // 修正ボタン押した時、
    e.preventDefault();
    this.setState({ isSubmitted: false });
  }
  handleSubmit = (e) => { // 送信ボタン押した時、
    e.preventDefault();
    const name = spa(this.state.name);
    const mail = spa(this.state.mail);
    const content = spa(this.state.content);
    const age = this.state.select;
    const radio = this.state.radioValue;
    const WEBHOOK_url = "https://hooks.slack.com/services/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";
    const payload = {
      text: '★New Message★\n'
        + 'お名前: ' + name + '\n'
        + 'メール: ' + mail + '\n'
        + '年齢: ' + age + '\n'
        + '方法: ' + radio + '\n'
        + '【問い合わせ内容】\n' + content
    };
    // フォーム内容をSlackのIncoming Webhook URL に送信
    fetch(WEBHOOK_url, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(() => {
      alert('送信が完了しました。追ってご連絡いたします🙌');
      this.setState({
        name: "",
        mail: "",
        select: "",
        radio: radioItems, // check状態をfalseにする
        radioValue: "", // radio値（output）を空にする
        content: "",
        isSubmitted: false,
      })
    })
    console.log('sent for slack!');
  }
  render() {
    // エラーメッセージ
    let NameError; // 名前
    let MailError; // アドレス
    let AgeError; // 年齢の選択
    let RadioError; // 連絡方法の選択
    let ContentError; // お問い合せ内容
    if (this.state.hasNameError) { // 未入力（true）の時、
      NameError = (
        <p className="error-message">※お名前を入力してください</p>
      );
    }
    if (this.state.hasMailError) {
      MailError = (
        <p className="error-message">※アドレスが未入力です</p>
      );
    }
    if (this.state.mail && !ad(this.state.mail)) { // 入力形式が違う時、
      MailError = (
        <p className="error-message">※正しい形式にしてください</p>
      );
    }
    if (this.state.hasAgeError) {
      AgeError = (
        <p className="error-message">※選択されていません</p>
      );
    }
    if (this.state.hasRadioError) {
      RadioError = (
        <p className="error-message">※直近の状況を選択してください</p>
      );
    }
    if (this.state.hasContentError) {
      ContentError = (
        <p className="error-message">※希望事項を入力してください</p>
      );
    }
    return (
      <div className="contact py-4">
        {!this.state.isSubmitted
          ? // フォーム
          <>
            <p className="py-3">お気軽にご連絡ください。</p>
            <div className="px-0">
              <div className="px-0">
                {/* お名前 改行したいためblock要素にした */}
                <div className="d-block">
                  <label htmlFor="name" className="d-inline d-sm-inline-block bg-warning px-1 py-1 rounded">お名前（必須）</label>
                  <input type="text" id="name" placeholder="大阪太郎"
                    className="textline ml-3" autoComplete="off"
                    value={this.state.name} // 入力値
                    onChange={(e) => { this.handleName(e) }} // e: string
                  />
                  {/* メソッド */}
                  {NameError}
                </div>
                {/* Email */}
                <div className="d-block mt-3">
                  <label htmlFor="email" className="bg-warning px-1 py-1 rounded">Email（必須）</label>
                  <input type="text" id="email" placeholder="aichi@gifu.com"
                    className="textline ml-3" autoComplete="off"
                    value={this.state.mail} onChange={(e) => { this.handleMail(e) }}
                  />
                  {MailError}
                </div>
                {/* selectBox */}
                <div className="d-block mt-3">
                  <label className="bg-info mr-3 px-1 py-1 rounded">年齢（任意）</label>
                  <select name="age" className="textline ml-3"
                    value={this.state.select} onChange={(e) => { this.handleSelect(e) }}
                  >
                    {[
                      { input: "-", output: "回答しない" },
                      { input: "16-25歳", output: "16~25歳" },
                      { input: "26-35歳", output: "26~35歳" },
                      { input: "36-45歳", output: "36~45歳" },
                      { input: "46-歳", output: "46~歳" },
                    ].map((ee, i) => {
                      return (
                        <option key={i} value={ee.output}>{ee.input}</option>
                      )
                    })}
                  </select>
                  {AgeError}
                </div>
                {/* ラジオボタン */}
                <div className="radio d-inline-block mt-3">
                  <div className="d-sm-inline-block d-block text-left">
                    <p className="d-inline-block mb-0 bg-warning px-1 py-1 rounded">職業（必須）</p>
                  </div>
                  {this.state.radio.map((item, i) => {
                    return (
                      <label key={i} className="ml-3 my-2">
                        <input type="radio" name="abcde" className="mr-1"
                          value={item.output} onChange={() => { this.handleRadio(item) }}
                          checked={item.check} // checkを保持
                        />{item.input}
                        <span>{/* 円枠 */}</span>
                      </label>
                    )
                  })}
                  {RadioError}
                </div>
              </div>
              {/* 内容 */}
              <div className="d-inline-block mt-3">
                <div className="d-block text-left">
                  <label className="d-inline-block my-2 px-2 bg-warning py-1 rounded">お問い合わせ内容（必須）</label><br />
                </div>
                <textarea
                  className="textline" placeholder="希望事項" cols="35" rows="7" maxLength="500"
                  value={this.state.content} onChange={(e) => { this.handleContent(e) }}
                />
                {ContentError}
              </div>
            </div>
            <form onSubmit={(e) => { this.handleConfirm(e) }}>
              <input type="submit" value="確認画面へ" className="submitbtn" />
            </form>
          </>
          : // 確認画面
          <>
            <h5 className="">下記内容でよろしいでしょうか？</h5>
            <hr />
            <ul className="text-left my-0 mx-auto p-4">
              {[
                { input: "お名前", output: [spa(this.state.name)] },
                { input: "Email", output: [spa(this.state.mail)] },
                { input: "年齢", output: [this.state.select] },
                { input: "職業", output: [this.state.radioValue] },
                { input: "内容", output: [spa(this.state.content)] },
              ].map((e, i) => {
                return (
                  <li key={i}><span>{e.input}：</span><span className="answer">{e.output}</span></li>
                )
              })}
            </ul>
            <div className="d-flex justify-content-center">
              <form className="mr-3">
                <input type="submit" value="修正する" className="submitbtn"
                  onClick={(e) => { this.handleFix(e) }}
                />
              </form>
              <form>
                <input type="submit" value="送信" className="submitbtn"
                  onClick={(e) => { this.handleSubmit(e) }}
                />
              </form>
            </div>
          </>
        }
      </div>
    );
  }
}
