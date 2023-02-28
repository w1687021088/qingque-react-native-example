import { type StyleProp, type ViewStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'
import themeColors from '@lib/color/theme'
import enums from '@enums/mutations'
import styled from 'styled-components/native'

console.log(enums)

type CaButtonProps = {
  // 样式类型
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | undefined
  // 样式
  style?: StyleProp<ViewStyle> | undefined
  // 按钮标题
  buttonTitle?: string | undefined
  // 触摸事件
  onClick?: () => void
  // 是否禁用
  disabled?: boolean | undefined
  // 开启加载模式
  loading?: boolean | undefined
}

function CaButton({ children, buttonTitle, onClick, type = 'default', disabled = false }: PropsWithChildren<CaButtonProps>) {
  return (
    <ScClickView activeOpacity={0.6} underlayColor="#f67488" themeColors={themeColors[type]} onPress={() => !disabled && onClick?.()}>
      {children || <ScClickViewTitle>{buttonTitle || '确定'}</ScClickViewTitle>}
    </ScClickView>
  )
}

export default CaButton

const ScClickView = styled.TouchableHighlight<{ themeColors: string }>`
  background-color: ${props => props.themeColors};
  border-radius: 5px;
`

const ScClickViewTitle = styled.Text`
  line-height: 48px;
  color: white;
  text-align: center;
`
