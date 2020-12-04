import React from 'react';

class Contactform extends React.Component {
  constructor(props) { // なぜpropsが入るのか？
    super(props); // superとは、React.Componentのこと。初期化処理をここで行う。
    this.state = { // 初期値を管理
      isSubmitted: false, // 送信状態
      name: "", // 入力値（まだ入力不可）
      hasNameError: false, // 入力状態
      content: "", // 内容の値
      hasContentError: false,
      age: '非公表', // selectした値
      hasAgeError: false,
      value: '任意', // ラジオボタンの値
      hasMailError: false,
    };
  }
  // JSXに書いているメソッドが呼び出され処理、プロパティを更新
  handleSubmit() { // formが送信された時、
    this.setState({ isSubmitted: true }); // 初期値がtrueになる
  }
  handleName(e) { // 名前を入力した時、
    const inputValue = e.target.value; // 入力した値
    // const isEmpty = inputValue === "";
    this.setState({
      name: inputValue, // を表示
      hasNameError: inputValue === "", // 空ならば
    });
  }
  handleContent(e) { // 内容を入力した時、
    this.setState({
      content: e.target.value,
      hasContentError: e.target.value === "",
    });
  }
  handleAge(e) { // 年齢を選択した時、
    this.setState({
      age: e.target.value,
      hasAgeError: e.target.value === "",
    });
  }
  handleMail(e) { // ラジオボタンを選択した時、
    this.setState({
      value: e.target.value,
      hasMailError: e.target.value === "",
    });
  }
  render() {
    // JSXに書いている文の内容について条件分岐（props）
    let NameError; // お名前エラー
    if (this.state.hasNameError) { // （propsが空の時）
      NameError = (
        <p className="error-message">
          ※お名前を入力してください
        </p>
      );
    }
    let ContentError; // お問い合せ内容エラー
    if (this.state.hasContentError) {
      ContentError = (
        <p className="error-message">
          ※希望事項を入力してください
        </p>
      );
    }
    let AgeError; // 年齢の選択エラー
    if (this.state.hasAgeError) {
      AgeError = (
        <p className="error-message">
          ※年齢を選択してください
        </p>
      );
    }
    let MailError; // 連絡方法の選択エラー
    if (this.state.hasMailError) {
      MailError = (
        <p className="error-message">
          ※ご希望の方法を選択してください
        </p>
      );
    }
    let contactForm; // フォーム状態
    if (this.state.isSubmitted) {
      contactForm = ( // 送信後
        <ul className="submit-m text-left my-0 mx-auto">
          <h4 className="text-center">下記にて受付致しました。後日連絡致します。</h4>
          <hr />
          <p>お名前</p>
          <li>「<span>{this.state.name}</span>」さん</li>
          <p>年齢</p>
          <li>「<span>{this.state.age}</span>」</li>
          <p>連絡方法</p>
          <li>「<span>{this.state.value}</span>」</li>
          <p>内容</p>
          <li>「<span>{this.state.content}</span>」</li>
          <form className="text-center">
            <input type="submit" value="確認完了" className="submit" />
          </form>
        </ul>
      );
    } else { // 送信前
      contactForm = (
        <form onSubmit={() => { this.handleSubmit() }}>
          <div className="row w-80">
            <div className="col-md-6">
              {/* お名前 */}
              <div className="">
                <label>お名前</label>
                <input type="text" className="textline ml-3" placeholder="大阪太郎"
                  value={this.state.name} // 入力値
                  onChange={(e) => { this.handleName(e) }} // e:値
                />
              </div>
              {NameError}
              {/* 年齢 */}
              <div className="mt-3">
                <label htmlFor="age">年齢</label>
                <select name="age" id="age" className="textline ml-3"
                  value={this.state.age}
                  onChange={(e) => { this.handleAge(e) }}
                >
                  <option value="？歳">年齢が未選択です。</option>
                  <option value="16-25歳">16-25歳</option>
                  <option value="26-35歳">26-35歳</option>
                  <option value="36-45歳">36-45歳</option>
                  <option value="46歳-">46歳-</option>
                </select>
              </div>
              {AgeError}

              {/* 連絡方法 */}
              <fieldset className="conect text-left mt-3 mx-auto mb-0">
                <p>連絡方法</p>
                <label><input type="radio" name="conect" value="メール"
                  onChange={(e) => { this.handleMail(e) }}
                />メール</label>
                <label><input type="radio" name="conect" value="電話"
                  onChange={(e) => { this.handleMail(e) }}
                />電話</label>
                <label><input type="radio" name="conect" value="メールまたは電話"
                  onChange={(e) => { this.handleMail(e) }}
                />どちらでも可</label>
              </fieldset>
              {MailError}
            </div>

            <div className="col-md-6 px-0">
              <p htmlFor="" className="mt-2 mb-2">お問い合わせ内容</p>
              <textarea
                className="textline w-80"
                id="" cols="38" rows="10"
                maxLength="500"
                placeholder="ご要望をご記入下さい"
                value={this.state.content}
                onChange={(e) => { this.handleContent(e) }}
              />
              {ContentError}
            </div>
          </div>

          <div id="sub">
            <input type="submit" value="送信" className="submit" />
          </div>
        </form>
      );
    }
    return (
      <div className="contact pt-5 pb-5 my-3 mx-2">
        <div>
          {/* お問い合わせ部 */}
          {contactForm}
        </div>
      </div>
    );
  }
}

export default Contactform;
