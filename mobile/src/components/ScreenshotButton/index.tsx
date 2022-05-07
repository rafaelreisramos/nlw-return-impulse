import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Camera, Trash } from 'phosphor-react-native'

import { styles } from './styles'
import { theme } from '../../theme'

type ScreenshotButtonProps = {
  screenshot: string | null
  onTakeShot: () => void
  onRemoveShot: () => void
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot
}: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image source={{ uri: screenshot }} style={styles.image} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  )
}
