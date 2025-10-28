import styled from "styled-components";
import mobileBg from "../../../assets/images/to-rebelia-bg-mobile.png";
import desktopBg from "../../../assets/images/to-rebelia-bg-desktop.png";

export const StyledTimer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fbea10;
  font-weight: bold;

  background-color: #000;
  background-image: url(${mobileBg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: url(${desktopBg});
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  & span {
    font-size: 16px; /* Мобільний за замовчуванням */
  }

  .timer-numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .time-unit {
    display: inline-block;
    text-align: center;
    align-items: center;
    font-variant-numeric: tabular-nums;
  }

  /* Маленькі телефони (до 360px) */
  @media (max-width: 360px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 14px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Середні телефони (361px - 410px) */
  @media (min-width: 361px) and (max-width: 410px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 14px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Великі телефони (411px - 480px) */
  @media (min-width: 411px) and (max-width: 480px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 14px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Планшети вертикально (481px - 767px) */
  @media (min-width: 481px) and (max-width: 767px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 14px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Планшети горизонтально (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 15px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Невеликі ноутбуки (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 15px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Середні ноутбуки (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 15px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Великі монітори (1440px - 1919px) */
  @media (min-width: 1440px) and (max-width: 1919px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 15px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  /* Дуже великі монітори (1920px+) */
  @media (min-width: 1920px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 15px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }

  @media (min-width: 300px) {
    & span {
      font-size: 10px;
    }

    .timer-numbers {
      font-size: 15px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }
  }
`;
