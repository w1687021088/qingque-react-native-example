import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'
import React, { type PropsWithChildren, useState } from 'react'
import CaButton from '@components/ui/CaButton'

// type PageWrapperProps = {}

function PageWrapper({ children }: PropsWithChildren) {
  const [visible, setModalVisible] = useState(false)

  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Modal visible={visible} transparent animationType="slide" onRequestClose={() => setModalVisible(false)}>
          <TouchableNativeFeedback
            onPress={() => {
              setModalVisible(false)
            }}
          >
            <View style={styles.coverUp}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent} onStartShouldSetResponderCapture={() => true}>
                  <Text style={styles.title}>title</Text>
                  <View style={styles.content}>
                    <Text style={styles.text} selectable ellipsizeMode={'tail'} numberOfLines={2}>
                      Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal Modal
                    </Text>
                  </View>
                </View>
                <View style={styles.action}>
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    style={styles.modalSureButton}
                    onPress={() => {
                      console.log(12)
                      // setModalVisible(false)
                    }}
                  >
                    <Text style={styles.modalButtonText}>确定</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.modalCancelButton}
                    onPress={() => {
                      setModalVisible(false)
                    }}
                  >
                    <Text style={styles.modalButtonText}>取消</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        </Modal>
        <StatusBar />
        <View style={styles.container}>
          <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={styles.container}>
            {children}
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setModalVisible(true)
              }}
            >
              <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableOpacity>
          </ScrollView>
          <CaButton type="success" />
        </View>
      </SafeAreaView>
    </>
  )
}

function App() {
  console.log('初始化', 'app rn, 修改热更新')
  return (
    <>
      <PageWrapper />
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  coverUp: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center'
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalContent: {
    minHeight: 120
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'block',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  card: {
    height: 200,
    backgroundColor: '#2170af'
  },
  action: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  modalSureButton: {
    flex: 1,
    backgroundColor: '#fc2040',
    borderRadius: 5,
    marginRight: 10
  },
  modalCancelButton: {
    flex: 1,
    backgroundColor: '#6a6c6c',
    borderRadius: 5,
    marginLeft: 10,
    elevation: 2
  },
  modalButtonText: {
    lineHeight: 48,
    color: '#ffffff',
    textAlign: 'center'
  },
  content: {
    marginTop: 5,
    marginBottom: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#171616',
    lineHeight: 35
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    color: '#171616',
    lineHeight: 24
  }
})
