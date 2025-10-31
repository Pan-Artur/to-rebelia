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
    font-size: 16px;
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

  .time-up-message {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 360px) {
    & span {
      font-size: 15px;
    }

    .timer-numbers {
      font-size: 20px;
    }

    .time-unit {
      width: 10px;
      height: 8px;
    }

    .time-up-message {
      font-size: 18px;
    }
  }
`;
