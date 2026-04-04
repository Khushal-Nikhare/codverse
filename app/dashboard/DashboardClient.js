'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './dashboard.module.css';

export default function DashboardClient() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles['dashboard-body']}>
      <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`} id="sidebar">
        <div className={styles['sidebar-header']}>
          <div className={styles['sidebar-logo']}>
            <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323445/codverse/uploads/logo_lwdiif.jpg" alt="Codverse Tech Logo" width={40} height={40} />
            <span>Codverse <strong>Tech</strong></span>
          </div>
          <button className={styles['collapse-btn']} id="toggle-sidebar" onClick={() => setCollapsed((prev) => !prev)}>
            &#9776;
          </button>
        </div>
        <nav className={styles['sidebar-nav']}>
          <div className={`${styles['nav-item']} ${styles.active}`}>
            <div className={styles['nav-item-icon']}>&#128200;</div>
            <span>Overview</span>
          </div>
          <div className={styles['nav-item']}>
            <div className={styles['nav-item-icon']}>&#128187;</div>
            <span>Projects</span>
          </div>
          <div className={styles['nav-item']}>
            <div className={styles['nav-item-icon']}>&#9881;</div>
            <span>Settings</span>
          </div>
        </nav>
      </aside>

      <main className={styles['main-content']}>
        <header className={styles['dashboard-header']}>
          <div className={styles['header-logo']}>
            <Image src="https://res.cloudinary.com/dr9gcw73m/image/upload/v1775323445/codverse/uploads/logo_lwdiif.jpg" alt="Codverse Tech Logo" width={120} height={32} />
          </div>
          <div className="header-search">
            <h3 style={{ margin: 0 }}>Project Dashboard</h3>
          </div>
          <div className="header-profile">
            <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%' }}></div>
          </div>
        </header>

        <div className={styles['content-body']}>
          <h1 style={{ marginBottom: '2rem' }}>Welcome, User</h1>
          <div className={styles['card-grid']}>
            <div className={styles['stat-card']}>
              <h3 style={{ color: 'var(--text-muted)' }}>Active Projects</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 700 }}>12</p>
            </div>
            <div className={styles['stat-card']}>
              <h3 style={{ color: 'var(--text-muted)' }}>Tasks Pending</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 700 }}>4</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
