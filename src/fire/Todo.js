import React from 'react';
// Todoアプリ

// <li>中身の初期状態
const todos = [
  // {id: 0, title: 'Task 0', isDone: false},
  // {id: 1, title: 'Task 1', isDone: false},
  // {id: 2, title: 'Task 2', isDone: true},
];

// タイトル + パージ部のコンポーネント
function TodoHeader(props) {
  // 未完了のli要素だけを取得
  const remaining = props.todos.filter(todo => {
    return !todo.isDone;
  });
  return ( // 削除機能だからpurgeがとる引数はないってこと？？
    <h3 className="pb-2">
      <button className="px-1" onClick={() => props.purge()}>削除</button>
        My Todos
      <span>({remaining.length}/{props.todos.length})</span>
    </h3>
  );
}
// 入力欄の本文: UI変更（値の入力）はsetStateのみで行う。
// →onChangeイベントを設定し、Todoコンポーネントで実装していく！
function TodoForm(props) {
  return (
    <form className="my-3" onSubmit={props.addTodo}>
      <input type="text" value={props.item}　
        onChange={props.updateItem}
      />
      <input type="submit" value="追加" />
    </form>
  );
}
// li要素コンポーネント（拡張しやすいように）
function TodoItem(props) { // stateを保持しないので関数で作る
  return ( // onChangeを設定し、親クラスのstateを変更し、親へ処理をゆずっていく。props.checkTodoに引数props.todoを渡す。
    <li>
      <label>
        <input type="checkbox"
          checked={props.todo.isDone}
          onChange={() => props.checkTodo(props.todo)}
        />
        <span className={props.todo.isDone ? 'done' : ''}>
          {props.todo.title}
        </span>
        <span className="cmd" // 削除ボタン
          onClick={() => { props.deleteTodo(props.todo) }}
        >[x]
        </span>
      </label>
    </li>
  );
  }
// ul要素 コンポーネント
function TodoList(props) {
  const todos = props.todos.map(todo => { // 渡されたpropsをmapで処理
    return (
      <TodoItem
        key={todo.id}
        todo={todo} // ★propsのtodo属性として子へ渡す。
        checkTodo={props.checkTodo} // 親へ渡す。
        deleteTodo={props.deleteTodo} // 親へ渡す。
      />
    );
  });
  return (
    <ul className="text-left p-0">
      {props.todos.length ? todos: <li> Nothing to do</li>}
    </ul>
  );
}
// li要素のidを生成
function getUniqueId() { // 現在時刻-乱数 36進数
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
}

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ここでデータを一元管理する
class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos, // key：値
      item: '' // テキスト入力
    }
    // 何のためにここ書いている？？
    // state使う時にかく。各メソッドに渡す。
    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.purge = this.purge.bind(this);
  };

  // メソッドの共通：どれもthis.state.todos.から始まる。
  purge() {
    if (!window.confirm('are you sure?')) {
      return; // NGならキャンセル
    }
    const todos = this.state.todos.filter(todo => {
      return !todo.isDone; // チェックしていない要素だけを
    });
    this.setState({
      todos: todos // 集めて更新
    });
  }
  // テキスト入力値を管理したときに、
  updateItem(e) { // formの値はイベントオブジェクトから取得できる。
    this.setState({
      item: e.target.value
    });
  }
  // リスト追加したときに、
  addTodo(e) { // 画面が遷移しないようにeをつける
    e.preventDefault();
    if (this.state.item.trim() === '') { // trim????
      return;
    }
    const item = { // 新しく追加したいtodosオブジェクト
      id: getUniqueId(), // ユニークなid
      title: this.state.item, // テキストの名前
      isDone: false
    };
    const todos = this.state.todos.slice(); // 新しい文字列
    todos.push(item); // todosに対して上記itemを追加
    this.setState({
      todos: todos,
      // item: ''
    });
  }
  // チェックON/OFF管理するときに、
  checkTodo(todo) { // onChangeできたtodoをindexOfのtodoに渡す。
    const todos = this.state.todos.map(todo => { // stateが変更できないので全てのpropsの値を持つtodosのコピーを作る。
      return { id: todo.id, title: todo.title, isDone: todo.isDone };
    });
    // この中で何番目のidDoneを変更すればいいか
    const pos = this.state.todos.map(todo => { // pos番目とは、
      return todo.id; // idプロパティの配列の中で、
    }).indexOf(todo.id); // 渡されてきたtodo.idと同じ番号のことで、
    // その番のisDoneのチェックを反転する。
    todos[pos].isDone = !todos[pos].isDone;
    this.setState({ // 値を変更
      todos: todos // これが新しく作ったtodosだよ。
    });
  }
  // 削除するときに、
  deleteTodo(todo) {
    if (!window.confirm('are you sure?')) {
      return; // NGならキャンセル
    }
    // 今回はオブジェクトのプロパティまではいじらないのでslice
    const todos = this.state.todos.slice(); // 文字列
    const pos = this.state.todos.indexOf(todo); // 選択したインデックス
    todos.splice(pos, 1); // →から1つの要素を削除。
    this.setState({
      todos: todos // これが新しく作ったtodosだよ。
    });
  }
  // Local Strageを使って永続化
  // コンポーネントが更新される際にデータを保存する。
  componentDidUpdate() { // keyはtodos、JSON形式にてstateの値を保持
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
  // コンポーネントがマウントされる際にLocalStorageにデータを読み込む。
  componentDidMount() {
    this.setState({ // todosの中身をLocalStorageの中身にしたい
      todos: JSON.parse(localStorage.getItem('todos')) || [] // 上手くいかなければ空配列にしてあげる。
    });
  }

  render() {
    return (
      <div className="todo pt-4 pb-0 px-5">
        <TodoHeader // タイトル
          // todos属性の値を子へ渡す
          todos={this.state.todos} // Todoの数
          purge={this.purge} // 一斉削除
        />
        <TodoForm // 入力値の各属性
          updateItem={this.updateItem} // 入力値管理
          addTodo={this.addTodo} // 追加
          item={this.state.item} // テキスト入力
        />
        <TodoList // リスト内の各属性
          todos={this.state.todos} // id, title, idDone
          // 子より受け取ったメソッド
          checkTodo={this.checkTodo} // チェックメソッド
          deleteTodo={this.deleteTodo} // 削除メソッド
        />
      </div>
    );
  }
}

export default Todo;