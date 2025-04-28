
## 👥 Команда разработчиков

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
  
  .team-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 2rem 0;
    padding: 2rem;
    background: 
      radial-gradient(circle at 20% 30%, rgba(46,125,50,0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(25,118,210,0.15) 0%, transparent 40%),
      linear-gradient(135deg, #0a0f1a 0%, #1a1e2c 100%);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }
  .team-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.03"><circle cx="20" cy="20" r="1" fill="white"/><circle cx="50" cy="50" r="0.8" fill="white"/><circle cx="80" cy="30" r="0.6" fill="white"/><circle cx="30" cy="80" r="0.7" fill="white"/><circle cx="70" cy="70" r="0.9" fill="white"/></svg>');
    z-index: 0;
  }
  .member-card {
    width:200px;
    height: 350px;
    padding: 15px;
    background: rgba(255,255,255,0.08);
    border-radius: 18px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 1px solid rgba(255,255,255,0.12);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    
  }
  .member-card:hover {
    transform: translateY(-8px);
    background: rgba(255,255,255,0.12);
    box-shadow: 0 12px 32px rgba(0,0,0,0.2);
  }
  .avatar-container {
    width: 90px;
    height: 90px;
    margin: 0 auto 12px;
    border-radius: 50%;
    padding: 2px;
    /* background: linear-gradient(45deg, #2e7d32, #43a047); */
    box-shadow: 0 4px 12px rgba(46,125,50,0.3);
    transition: all 0.4s ease;
  }
  .member-card:hover .avatar-container {
    transform: scale(1.06);
    box-shadow: 0 6px 20px rgba(46,125,50,0.4);
  }
  .member-avatar {
    
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.9);
    object-fit: cover;
    transition: all 0.4s ease;
  }
  .member-card:hover .member-avatar {
    border-color: white;
  }
  .member-name {
    color: #ffffff;
    margin: 0 0 10px;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.1px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.3;
  }
  .member-role {
    color: #e8f5e9;
    font-size: 0.85rem;
    
    margin: 0 0 auto;
    margin-top:0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .role-tag {
    display: block;
    padding: 6px 0;
    margin: 2px 0;
    font-size: 0.82rem;
    position: relative;
  }
  .role-tag::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: rgba(255,255,255,0.1);
  }
  .member-github {
    color: #a5d6a7;
    text-decoration: none;
    font-size: 0.85rem;
    margin-top: 12px;
    padding-top: 10px;
    border-top: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease;
  }
  .member-card:hover .member-github {
    color: #69f0ae;
    border-top-color: rgba(255,255,255,0.2);
  }
</style>

<div class="team-container">

<!-- Team Lead -->
<div class="member-card">
  <div class="avatar-container">
    <img src="https://avatars.githubusercontent.com/u/191477093?v=4" class="member-avatar"/>
  </div>
  <h3 class="member-name">Овчинникова Елизавета</h3>
  <div class="member-role">
    <span class="role-tag">Team Lead</span>
    <span class="role-tag">Дизайнер</span>
    <span class="role-tag">Fullstack Dev</span>
  </div>
  <a href="https://github.com/Liza-O" class="member-github">@Liza-O</a>
</div>

<!-- Designer -->
<div class="member-card">
  <div class="avatar-container">
    <img src="https://avatars.githubusercontent.com/u/191490969?v=4" class="member-avatar"/>
  </div>
  <h3 class="member-name">Буренова Анна</h3>
  <div class="member-role">
    <span class="role-tag">Дизайнер</span>
    <span class="role-tag">Fullstack Dev</span>
  </div>
  <a href="https://github.com/BurenovaAnna6302" class="member-github">@BurenovaAnna6302</a>
</div>

<!-- Developers -->
<div class="member-card">
  <div class="avatar-container">
    <img src="https://avatars.githubusercontent.com/u/166629949?v=4" class="member-avatar"/>
  </div>
  <h3 class="member-name">Елизарова Анастасия</h3>
  <div class="member-role">
    <span class="role-tag">Fullstack Dev</span>
    <span class="role-tag" style="opacity: 0;">placeholder</span>
  </div>
  <a href="https://github.com/Anastasia011s" class="member-github">@Anastasia011s</a>
</div>

<div class="member-card">
  <div class="avatar-container">
    <img src="https://avatars.githubusercontent.com/u/159873153?v=4" class="member-avatar"/>
  </div>
  <h3 class="member-name">Кочетков Егор</h3>
  <div class="member-role">
    <span class="role-tag">Fullstack Dev</span>
    <span class="role-tag" style="opacity: 0;">placeholder</span>
  </div>
  <a href="https://github.com/PIRSON21" class="member-github">@PIRSON21</a>
</div>

<div class="member-card">
  <div class="avatar-container">
    <img src="https://avatars.githubusercontent.com/u/160622634?v=4" class="member-avatar"/>
  </div>
  <h3 class="member-name">Кувшинов Антон</h3>
  <div class="member-role">
    <span class="role-tag">Fullstack Dev</span>
    <span class="role-tag" style="opacity: 0;">placeholder</span>
  </div>
  <a href="https://github.com/di-not" class="member-github">@di-not</a>
</div>

</div>
