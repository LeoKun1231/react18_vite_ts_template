/*
 * @Author: leo
 * @Date: 2023-05-25 10:53:17
 * @LastEditors: leo
 * @LastEditTime: 2023-05-25 10:54:36
 * @Description:
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  onClick: () => void
}

const MyCount: FC<IProps> = ({ onClick }) => {
  console.log('MyCount===========')
  return <div onClick={onClick}>MyCount</div>
}

export default memo(MyCount)
