import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CreateTodoMutationVariables, FindTodosQuery, useCreateTodoMutation, useFindTodosQuery } from '../gen/graphql'

const Home: NextPage = () => {
  const [data, setData] = useState<FindTodosQuery>()
  const [form, setForm] = useState<CreateTodoMutationVariables>({
    input: {
      text: '',
      userId: '',
    },
  })

  const [findResult] = useFindTodosQuery()
  const [createResult, createTodo] = useCreateTodoMutation()

  useEffect(() => {
    setData(findResult.data)
  }, [findResult])

  useEffect(() => {
    createResult.data && data && data.todos.push(createResult.data.createTodo)
  }, [createResult])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div>
          <input
            type="text"
            value={form.input.text}
            placeholder="Title"
            onChange={e => setForm({ input: { ...form.input, text: e.target.value } })}
          />
          <button onClick={() => createTodo(form)}>Add</button>
        </div>
        <div>
          {data && data.todos.map((todo, idx) =>
            <p key={idx}>Title: { todo.text }, Done: {todo.done}, Username: {todo.user.name}</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
