import React from 'react';

class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: '未選択',
      radio: "",
      content: "",
      hasNameError: false,
      hasAgeError: false,
      hasRadioError: false,
      hasContentError: false,
      isSubmitted: false, // 確認画面状態
    };
  }
  handleName(e) { // 名前入力した時
    const inputValue = e.target.value;
    this.setState({
      name: inputValue, // string
      hasNameError: inputValue === "", // 未入力ならtrueになる
    });
  }
  handleContent(e) { // 内容を入力した時
    this.setState({
      content: e.target.value,
      hasContentError: e.target.value === "",
    });
  }
  handleAge(e) { // 年齢を選択した時
    this.setState({
      age: e.target.value,
      hasAgeError: e.target.value === "",
    });
  }
  handleRadio(e) { // ラジオボタンを選択した時
    this.setState({
      radio: e.target.value,
      hasRadioError: e.target.value === "",
    });
  }
  handleConfirm(e) { // Validation
    e.preventDefault();
    if (!this.state.name) {
      this.setState({ hasNameError: true }); // 表示
    }
    if (!this.state.content) {
      this.setState({ hasContentError: true });
    }
    if (!this.state.radio) {
      this.setState({ hasRadioError: true });
    }
    if (!this.state.name || !this.state.content || !this.state.radio) {
      return;
    }
    this.setState({ isSubmitted: true });
  }
  handleFix(e) {
    e.preventDefault();
    this.setState({ isSubmitted: false, radio: "" });
  }
  handleSubmit = (e) => { // slack通知
    e.preventDefault();
    console.log('ok');
    const name = this.state.name;
    const age = this.state.age;
    const radio = this.state.radio;
    const content = this.state.content;
    const WEBHOOK_url = "https://hooks.slack.com/services/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";
    const payload = {
      text: '★New Message★\n'
        + 'お名前: ' + name + '\n'
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
        age: "",
        radio: "",
        content: "",
        isSubmitted: false,
      })
    })
  }
  render() {
    let NameError; // お名前エラー
    let AgeError; // 年齢の選択エラー
    let RadioError; // 連絡方法の選択エラー
    let ContentError; // お問い合せ内容エラー
    let ContactForm; // フォーム状態
    if (this.state.hasNameError) { // 未入力の時、true
      NameError = (
        <p className="error-message">※お名前を入力してください</p>
      );
    }
    if (this.state.hasAgeError) {
      AgeError = (
        <p className="error-message">※年齢が選択されていません</p>
      );
    }
    if (this.state.hasRadioError) {
      RadioError = (
        <p className="error-message">※ご希望の方法を選択してください</p>
      );
    }
    if (this.state.hasContentError) {
      ContentError = (
        <p className="error-message">※希望事項を入力してください</p>
      );
    }
    const ageform = [ // 年齢フォーム
      { output: "", input: "-" },
      { output: "16~25歳", input: "16-25歳" },
      { output: "26~35歳", input: "26-35歳" },
      { output: "36~45歳", input: "36-45歳" },
      { output: "46~歳", input: "46-歳" },
    ];
    const radioform = [ // radioボタン
      { output: "メール", input: "メール" },
      { output: "電話", input: "電話" },
      { output: "メールまたは電話", input: "どちらでも可" },
    ];
    const confirmform = [ // 確認画面リスト
      { output: [this.state.name], input: "お名前" },
      { output: [this.state.age], input: "年齢" },
      { output: [this.state.radio], input: "連絡方法" },
      { output: [this.state.content], input: "内容" },
    ];
    if (this.state.isSubmitted) { // 確認画面
      ContactForm = (
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
      );
    } else { // 初期画面
      ContactForm = (
        <>
          <div className="px-0">
            <div className="px-0">
              {/* お名前 */}
              <div className="">
                <label htmlFor="name">お名前（必須）</label>
                <input type="text" id="name" placeholder="大阪太郎" autoComplete="off"
                  className="textline ml-3"
                  value={this.state.name} // 入力値
                  onChange={(e) => { this.handleName(e) }}
                />
                {NameError}
              </div>
              {/* Email */}
              {/* <div className="">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="aaa@gmail.com"
                  className="textline ml-3"
                  value={this.state.email} // 入力値
                // onChange={(e) => { this.handleMail(e) }}
                />
                {MailError}
              </div> */}

              {/* 年齢 */}
              <div className="mt-3">
                <label>年齢（任意）</label>
                <select name="age" className="textline ml-3"
                  value={this.state.age}
                  onChange={(e) => { this.handleAge(e) }}
                >
                  {ageform.map((ee, i) => {
                    return (
                      <option key={i} value={ee.output}>{ee.input}</option>
                    )
                  })}
                </select>
                {AgeError}
              </div>
              {/* 連絡方法 */}
              <fieldset className="d-inline text-left mt-3 mx-auto mb-0">
                <p>連絡方法（必須）</p>
                {radioform.map((ee, i) => {
                  return (
                    <label key={i}><input type="radio" className="ml-3 mr-1"
                      value={ee.output}
                      onChange={(e) => { this.handleRadio(e) }}
                    />{ee.input}</label>
                  )
                })}
                {RadioError}
              </fieldset>
            </div>
            <div className="">
              <p className="mt-2 mb-2">お問い合わせ内容（必須）</p>
              <textarea
                className="textline"
                cols="35" rows="8" maxLength="500"
                placeholder="希望事項"
                value={this.state.content}
                onChange={(e) => { this.handleContent(e) }}
              />
              {ContentError}
            </div>
          </div>
          <form onSubmit={(e) => { this.handleConfirm(e) }}>
            <input type="submit" value="確認画面へ" className="submitbtn" />
          </form>
        </>
      );
    }
    return (
      <div className="contact py-5 mt-3">
          {ContactForm}
      </div>
    );
  }
}

export default Contactform;
