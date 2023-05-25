/*
 * @Author: hqk
 * @Date: 2023-02-03 20:25:14
 * @LastEditors: leo
 * @LastEditTime: 2023-05-25 11:09:53
 * @Description:
 */
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Space } from 'antd'
import MyCount from '@/components/MyCount'
import { useMemoizedFn } from 'ahooks'

interface IProps {
  children?: ReactNode
}

const HomeMessage: FC<IProps> = () => {
  const [count, setCount] = useState(0)

  const handleAddCount = useMemoizedFn(() => {
    setCount(count + 1)
  })

  const handleMyCountClick = useMemoizedFn(() => {
    console.log(111111111111)
  })

  return (
    <div>
      <Space wrap>
        <button onClick={handleAddCount}>+1</button>
        <Button type="primary" onClick={handleAddCount}>
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <MyCount onClick={handleMyCountClick} />
      <div>count: {count}</div>
    </div>
  )
}

export default memo(HomeMessage)
