## 바이낸스 클론코딩

> Binance API를 활용한 암호화폐 거래소 구현 프로젝트입니다. 실시간 시세 조회, 차트 분석, 호가창 확인, 주문 기능 등 거래소의 핵심 기능들을 제공합니다.

<div align ="center">
  
  ![image](https://github.com/user-attachments/assets/5b6b9767-4842-4a64-b58e-8cfca80c14da)

**[🔗 지금 이용해보러가기](binance-clone-kappa.vercel.app/)**

</div>

### 프로젝트 설치 및 실행
해당 프로젝트를 열고 다음과 같이 명령어를 실행해주세요.
```bash
# 프로젝트 클론
git clone https://github.com/your-username/binance-clone.git

# 종속성 설치 (Next.js 15 버전 호환성을 위해 --legacy-peer-deps 옵션 필요)
npm install --legacy-peer-deps

# 개발 서버 실행
npm run dev
```


### 프로젝트 개요
- **주제**: 바이낸스 클론 프로젝트
- **개발 기간** : 2024.11.09~ 2024.11.12

### 기술스택
<div align= "start">
  <span>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"/>
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
  </span>
</div>

### 주요 기능
- 실시간 마켓 시세 조회
- 캔들스틱 차트와 이동평균선(MA7, MA25, MA99) 분석
- 실시간 호가창 및 거래 내역
- 다양한 시간 프레임 지원 (15m, 1h, 4h, 1d, 1w)
- 매수/매도 주문

### 실시간 데이터 업데이트
- 마켓 리스트: 30초
- 호가창: 1초
- 거래 내역: 1초
- 시세 정보: 1초

### 폴더 구조
```
src
 ┣ app
 ┃ ┣ atoms          # Recoil 상태 관리
 ┃ ┣ components     # 컴포넌트
 ┃ ┃ ┣ common      # 공통 컴포넌트
 ┃ ┃ ┗ ...         # 기능별 컴포넌트
 ┃ ┣ config        # 설정 파일
 ┃ ┣ constants     # 상수 정의
 ┃ ┣ hooks         # 커스텀 훅
 ┃ ┣ services      # API 서비스
 ┃ ┣ types         # 타입 정의
 ┃ ┗ utils         # 유틸리티 함수
 ┗ styles          # 전역 스타일
```

### 라이브러리
```json
{
  "@tanstack/react-query": "^5.59.20",
  "next": "15.0.3",
  "react": "^18.2.0",
  "recharts": "^2.13.3",
  "recoil": "^0.6.1",
  "tailwindcss": "^3.0.0"
}
```