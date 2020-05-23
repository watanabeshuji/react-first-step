# Overview
`useState` を利用し、Functional Componetnt にステートを定義。

`useState` は値と値更新用の関数を返す。

```
const [count, setCount] = useState(0)
```

値はイミュータブル。
関数などの中で更新用関数を利用して変更する。

```
  const handleClick = () => {
    setCount(count + 1)
  }
```

