import React from 'react';

// スペース削除
// (@param, @return) = (string, 前後スペースなしstring)
function spa(string) {
  return string.replace(/^[ |　]+|[ |　]+$/g, ''); // sだと半角スペースが適用されず,,
}
// a@g.com形式であればtrue
// (@param, @return) = (string, bool)
function ad(string) {
  const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  return reg.test(string);
}

// check状態をstate保持したかったがうまく変更できず
const radioitems = [ // radioボタン
  { id: 0, check: false, input: "社員", output: "社員" },
  { id: 1, check: false, input: "アルバイト", output: "アルバイト" },
  { id: 2, check: false, input: "無職", output: "無職" },
];

export default class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      age: '',
      radio: "",
      content: "",
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
      hasNameError: spa(inputValue) === "", // bool （未入力だとtrue）
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
  handleAge(e) { // 年齢を選択した時
    const inputValue = e.target.value;
    this.setState({
      age: inputValue,
      hasAgeError: inputValue === "",
    });
  }
  handleRadio(ee) { // ラジオボタンを選択した時
    const inputValue = ee.input;
    // console.log(ee.id); // 0
    // console.log(ee.check); // false
    // console.log(ee.input); // 選択した値
    // console.log(this.state.radio); // 保持している値
    this.setState({
      radio: inputValue,
      hasRadioError: inputValue === "",  // →checkでboolしたい。
    });
  }
  handleConfirm(e) { // 確認ボタン押した時、
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
    if (!this.state.age) {
      this.setState({ hasAgeError: true, age: "未回答" });
    }
    if (!this.state.radio) {
      console.log('not radio value');
      this.setState({ hasRadioError: true });
    }
    if (!this.state.name || !ad(this.state.mail) || !this.state.radio || !this.state.content) {
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
    const age = this.state.age;
    const radio = this.state.radio;
    const WEBHOOK_url = "https://hooks.slack.com/services/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";
    const payload = {
      text: '★New Message★\n'
        + 'お名前: ' + name + '\n'
        + 'メール: ' + mail + '\n'
        + '年齢: ' + age + '\n'
        + '方法: ' + radio + '\n'
        + '【問い合わせ内容】\n' + content
    };
    // fetchメソッドでフォーム内容をSlackのIncoming Webhook URL に送信
    fetch(WEBHOOK_url, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(() => {
      alert('送信が完了しました。追ってご連絡いたします🙌');
      this.setState({
        name: "",
        mail: "",
        age: "",
        radio: "",
        content: "",
        isSubmitted: false,
      })
    })
    console.log('sent for slack!');
  }
  render() {
    let NameError; // 名前エラー
    let MailError; // アドレスエラー
    let AgeError; // 年齢の選択エラー
    let RadioError; // 連絡方法の選択エラー
    let ContentError; // お問い合せ内容エラー
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
    if (this.state.mail && !ad(this.state.mail)) { // 入力していても形式が違う時、
      MailError = (
        <p className="error-message">※正しい形式にしてください</p>
      );
      // console.log('format adress!');
    }
    if (this.state.hasAgeError) {
      AgeError = (
        <p className="error-message">※選択されていません</p>
      );
      // console.log('age not selected');
    }
    if (this.state.hasRadioError) {
      RadioError = (
        <p className="error-message">※直近の状況を選択してください</p>
      );
      // console.log('radio not selected');
    }
    if (this.state.hasContentError) {
      ContentError = (
        <p className="error-message">※希望事項を入力してください</p>
      );
    }
    const confirmform = [ // 確認画面リスト（順番どおり）
      { input: "お名前", output: [spa(this.state.name)] },
      { input: "Email", output: [spa(this.state.mail)] },
      { input: "年齢", output: [this.state.age] },
      { input: "職業", output: [this.state.radio] },
      { input: "内容", output: [spa(this.state.content)] },
    ];
    const ageitems = [ // checkbox
      { input: "-", output: "回答しない" },
      { input: "16-25歳", output: "16~25歳" },
      { input: "26-35歳", output: "26~35歳" },
      { input: "36-45歳", output: "36~45歳" },
      { input: "46-歳", output: "46~歳" },
    ];

    return (
      <div className="contact py-5 mt-3">
        {this.state.isSubmitted // （三項演算子）
          ? // 確認画面
          <>
            <h5 className="">下記内容でよろしいでしょうか？</h5>
            <hr />
            <ul className="text-left my-0 mx-auto p-4">
              {confirmform.map((e, i) => {
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
          : // 元の画面
          <>
            <div className="px-0">
              <div className="px-0">
                {/* お名前 */}
                <div>
                  <div className="d-inline-block bg-white">
                    <label htmlFor="name" className="d-inline d-sm-inline-block bg-warning px-1 py-1 rounded">お名前（必須）</label>
                    {/* <div> */}
                    <input type="text" id="name" placeholder="大阪太郎"
                      className="textline ml-3" autoComplete="off"
                      value={this.state.name} onChange={(e) => { this.handleName(e) }}
                    />
                    {/* メソッド */}
                    {NameError}
                    {/* </div> */}
                  </div>
                </div>
                {/* Email */}
                <div className="d-inline-block bg-white mt-3">
                  <label htmlFor="email" className="bg-warning px-1 py-1 rounded">Email（必須）</label>
                  <input type="text" id="email" placeholder="aichi@gmail.com"
                    className="textline ml-3" autoComplete="off"
                    value={this.state.mail} onChange={(e) => { this.handleMail(e) }}
                  />
                  {MailError}
                </div>
                {/* 年齢 */}
                <div>
                  <div className="d-inline-block bg-white mt-3">
                    <label className="bg-info mr-3 px-1 py-1 rounded">年齢（任意）</label>
                    <select name="age" className="textline ml-3"
                      value={this.state.age} onChange={(e) => { this.handleAge(e) }}
                    >
                      {ageitems.map((ee, i) => {
                        return (
                          <option key={i} value={ee.output}>{ee.input}</option>
                        )
                      })}
                    </select>
                    {AgeError}
                  </div>
                </div>
                {/* ラジオボタン */}
                <div className="radio d-inline-block text-left mt-3 bg-white">
                  <p className="d-block d-sm-inline-block mb-0 bg-warning px-1 py-1 rounded">職業（必須）</p>
                  {radioitems.map((item, i) => {
                    return (
                      <label key={i} className="ml-3 my-2">
                        <input type="radio" name="abcde" className="mr-1"
                          value={item.output} onChange={() => { this.handleRadio(item) }}
                        // checked={item.check} // うまく保持できず
                        />{item.input}
                        <span>{/* 円 */}</span>
                      </label>
                    )
                  })}
                  {RadioError}
                </div>
              </div>
              <div className="d-inline-block bg-white mt-3">
                {/* 内容 */}
                <label className="d-inline-block my-2 px-2 bg-warning py-1 rounded">お問い合わせ内容（必須）</label><br />
                <textarea
                  className="textline" placeholder="希望事項" cols="35" rows="8" maxLength="500"
                  value={this.state.content} onChange={(e) => { this.handleContent(e) }}
                />
                {ContentError}
              </div>
            </div>
            <form onSubmit={(e) => { this.handleConfirm(e) }}>
              <input type="submit" value="確認画面へ" className="submitbtn" />
            </form>
          </>
        }
      </div>
    );
  }
}
