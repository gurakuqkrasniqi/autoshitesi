<template>
  <div
    class="main-container"
    style="
      max-width: 1140px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    "
  >
    <footer>
      <div class="part-2">
        <a href="https://www.facebook.com/kfbapp" target="_blank"
          ><img
            class="left"
            src="../../assets/images/brand-facebook.svg"
            alt="brand-facebook"
        /></a>
        <a href="https://www.instagram.com/kfbapp" target="_blank">
          <img
            class="left right"
            src="../../assets/images/brand-instagram.svg"
            alt="brand-instagram"
        /></a>
        <a href="https://twitter.com/kfbapp" target="_blank">
          <img
            class="right"
            src="../../assets/images/brand-twitter.svg"
            alt="brand-instagram"
        /></a>
      </div>
      <div class="part-3">
        <h5 id="first">
          &copy; 2022 keyboard fonts buddy. all rights reserved.
        </h5>
        <h5 id="last">
          <router-link id="privacy" to="/privacy">privacy policy</router-link>
          <div
            class="mark"
            style="background: transparent !important; padding: 0"
          >
            •
          </div>
          <router-link id="terms" to="/terms">terms & conditions</router-link>
        </h5>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-family: "Space Grotesk", sans-serif;
  .part-2 {
    margin: 32px 0;
    width: 100%;
    text-align: center;
    height: 32px;
    .left {
      padding-right: 8px;
    }
    .right {
      padding-left: 8px;
    }
  }

  .part-3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 32px;
    h5 {
      font-size: 12px;
      line-height: 1rem;
    }
    #first {
      color: #747474;
      text-align: left;
    }
    #last {
      display: flex;
      .mark {
        width: 8px;
        height: 8px;
        margin: -1px -2px -1px 3px;
        color: #252525;
      }
      a {
        text-decoration: none;
        color: #252525;
      }
      #privacy {
        padding-right: 5px;
      }
      #terms {
        padding-left: 5px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  footer {
    padding: 0 2rem;
  }
}

@media screen and (max-width: 768px) {
  footer {
    padding: 0 2rem;
    .part-2 {
      padding: 0;
      width: calc(100% - 32px);
      height: 32px;
      margin: 16px 0;
      h3 {
        line-height: 1.5rem;
        font-size: 16px;
      }
    }

    .part-3 {
      flex-direction: column;
      padding-bottom: 16px;
      h5 {
        line-height: 1rem;
        font-size: 12px;
        text-align: center;
      }

      #first {
        text-align: center;
        padding-bottom: 16px;
      }
      #last {
        padding: 0px 16px;
        width: 100%;
        display: flex;
        justify-content: center;
        .mark {
          margin: -1px 0.5px -1px 1px;
        }
      }
    }
  }
}

@media screen and (max-width: 319px) {
  footer {
    .part-3 {
      #last {
        flex-direction: column;
        align-items: center;
        .mark {
          margin: -2px 5px 8px 0px;
        }
      }
    }
  }
}
</style>
