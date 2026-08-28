import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const xemThongTin = () => {
    Alert.alert(
      'Thông tin sinh viên',
      'Họ và tên: Bùi Anh Kiên\n' +
      'Mã sinh viên: 23103034\n' +
      'Ngành học: Công nghệ thông tin'
    );
  };

  return (
    <View style={styles.container}>

      {/* Thẻ thông tin sinh viên */}
      <View style={styles.card}>

        {/* Ảnh đại diện */}
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.avatar}
        />

        {/* Họ và tên */}
        <Text style={styles.name}>
          Bùi Anh Kiên
        </Text>

        {/* Mã sinh viên */}
        <View style={styles.infoRow}>
          <Text style={styles.icon}>🆔</Text>

          <Text style={styles.label}>
            Mã sinh viên:
          </Text>

          <Text style={styles.value}>
            23103034
          </Text>
        </View>

        {/* Ngành học */}
        <View style={styles.infoRow}>
          <Text style={styles.icon}>🎓</Text>

          <Text style={styles.label}>
            Ngành học:
          </Text>

          <Text style={styles.value}>
            Công nghệ thông tin
          </Text>
        </View>

        {/* Nút xem thông tin */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={xemThongTin}
        >
          <Text style={styles.buttonText}>
            Xem thông tin
          </Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // Màn hình chính
  container: {
    flex: 1,
    backgroundColor: '#eef4fb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Thẻ sinh viên
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',

    // Bóng trên Android
    elevation: 8,

    // Bóng trên iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  // Ảnh đại diện
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  // Tên sinh viên
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 25,
  },

  // Một dòng thông tin
  infoRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  // Icon
  icon: {
    fontSize: 18,
    marginRight: 7,
  },

  // Tên trường
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginRight: 5,
  },

  // Nội dung
  value: {
    fontSize: 14,
    color: '#444444',
    flex: 1,
  },

  // Nút
  button: {
    width: '100%',
    backgroundColor: '#1261c9',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },

  // Hiệu ứng khi nhấn
  buttonPressed: {
    opacity: 0.7,
  },

  // Chữ nút
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});