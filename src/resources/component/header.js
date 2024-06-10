import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <a href="/thi-thu" style={styles.link}>Thi thử</a>
        <a href="/lo-trinh-hoc" style={styles.link}>Lộ trình học</a>
        <a href="/tai-lieu" style={styles.link}>Tài liệu</a>
        <a href="/ho-tro" style={styles.link}>Hỗ trợ</a>
      </div>
      <div style={styles.rightSection}>
        <span style={styles.greeting}>Xin chào: Sơn</span>
        <button style={styles.logoutButton}>Thoát</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f0f0f0', // Màu nền xám trắng nhạt
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  },
  leftSection: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#0000FF', // Màu chữ xanh dương
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily: "'Roboto', sans-serif",
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  greeting: {
    color: '#0000FF', // Màu chữ xanh dương
    fontSize: '18px',
    fontFamily: "'Roboto', sans-serif",
  },
  logoutButton: {
    backgroundColor: '#a9a9a9', // Màu nền xám đậm hơn một chút
    color: '#0000FF', // Màu chữ xanh dương
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: "'Roboto', sans-serif",
    borderRadius: '5px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
};

export default Header;
