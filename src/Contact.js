import React from 'react';

class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: '非公表',
      radio: "",
      content: "",
      isSubmitted: false,
      hasNameError: false,
      hasContentError: false,
      hasAgeError: false,
      hasMailError: false,
    };
  }
  handleName(e) { // 名前入力した時
    const inputValue = e.target.value;
    this.setState({
      name: inputValue, // string
      hasNameError: inputValue === "", // bool
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
  handleMail(e) { // ラジオボタンを選択した時
    this.setState({
      radio: e.target.value,
      hasMailError: e.target.value === "",
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
      this.setState({ hasMailError: true });
    }
    if (!this.state.name || !this.state.content || !this.state.radio) {
      return;
    }
    this.setState({ isSubmitted: true });
  }
  handleFix(e) {
    e.preventDefault();
    this.setState({ isSubmitted: false });
  }
  handleSubmit = (e) => { // slack通知
    e.preventDefault();
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
    let MailError; // 連絡方法の選択エラー
    let ContentError; // お問い合せ内容エラー
    let ContactForm; // フォーム状態
    const radioform = [ // radioボタン
      { value: "メール", atai: "メール" },
      { value: "電話", atai: "電話" },
      { value: "メールまたは電話", atai: "どちらでも可" },
    ];
    if (this.state.hasNameError) {
      NameError = (
        <p className="error-message">※お名前を入力してください</p>
      );
    }
    if (this.state.hasAgeError) {
      AgeError = (
        <p className="error-message">※年齢を選択してください</p>
      );
    }
    if (this.state.hasMailError) {
      MailError = (
        <p className="error-message">※ご希望の方法を選択してください</p>
      );
    }
    if (this.state.hasContentError) {
      ContentError = (
        <p className="error-message">※希望事項を入力してください</p>
      );
    }
    if (this.state.isSubmitted) { // 確認画面
      ContactForm = (
        <>
          <h6 className="">下記内容でよろしいでしょうか？</h6>
          <hr />
          <ul className="text-left my-0 mx-auto py-3 px-5">
            <li><span className="">お名前：</span><span className="answer">{this.state.name}</span></li>
            <li><span className="">年齢：</span><span className="answer">{this.state.age}</span></li>
            <li><span className="">連絡方法：</span><span className="answer">{this.state.radio}</span></li>
            <li><span className="">内容：</span><span className="answer">{this.state.content}</span></li>
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
        <form onSubmit={(e) => { this.handleConfirm(e) }}>
          <div className="px-0">
            <div className="px-0">
              {/* お名前 */}
              <div className="">
                <label>お名前</label>
                <input type="text" className="textline ml-3" placeholder="大阪太郎"
                  value={this.state.name} // 入力値
                  onChange={(e) => { this.handleName(e) }}
                />
                {NameError}
              </div>
              {/* 年齢 */}
              <div className="mt-3">
                <label htmlFor="age">年齢（任意）</label>
                <select name="age" id="age" className="textline ml-3"
                  value={this.state.age}
                  onChange={(e) => { this.handleAge(e) }}
                >
                  <option value="？歳">-</option>
                  <option value="16-25歳">16-25歳</option>
                  <option value="26-35歳">26-35歳</option>
                  <option value="36-45歳">36-45歳</option>
                  <option value="46歳-">46歳-</option>
                </select>
                {AgeError}
              </div>
              {/* 連絡方法 */}
              <fieldset className="d-inline text-left mt-3 mx-auto mb-0">
                <p>連絡方法</p>
                {radioform.map((aaa) => {
                  return (
                    <label><input type="radio" name="conect" value={aaa.value}
                      onChange={(e) => { this.handleMail(e) }}
                    />{aaa.atai}</label>
                  )
                })}
              </fieldset>
              {MailError}
            </div>
            <div className="">
              <p className="mt-2 mb-2">お問い合わせ内容</p>
              <textarea
                className="textline w-80"
                cols="35" rows="8"
                maxLength="500"
                placeholder="希望事項"
                value={this.state.content}
                onChange={(e) => { this.handleContent(e) }}
              />
              {ContentError}
            </div>
          </div>

          <div id="sub">
            <input type="submit" value="確認画面へ" className="submitbtn" />
          </div>
        </form>
      );
    }
    return (
      <div className="contact py-5 mt-3">
        <div>
          {ContactForm}
        </div>
      </div>
    );
  }
}

export default Contactform;
