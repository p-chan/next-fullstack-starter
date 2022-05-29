import Link from 'next/link'

export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>ホーム</a>
        </Link>
      </li>
      <li>
        <Link href="/app">
          <a>アプリ</a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a>新規登録</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>ログイン</a>
        </Link>
      </li>
      <li>
        <Link href="/logout">
          <a>ログアウト</a>
        </Link>
      </li>
    </ul>
  )
}
