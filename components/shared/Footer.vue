<template>
  <client-only>
    <footer class="footer has-background-grey has-text-light">
      <div class="content has-text-centered is-flex">
        <p>
          <strong>UdemyClone</strong> by
          <a href="https://jgthms.com" class="has-text-grey-darker">Alex K</a>.
          The source code is licensed
          <a
            href="http://opensource.org/licenses/mit-license.php"
            class="has-text-grey-darker"
            >MIT</a
          >. The website content is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            class="has-text-grey-darker"
            >CC BY NC SA 4.0</a
          >.
        </p>
        <div class="content">
          <div class="inner-content">
            <p class="heading is-3 m-r-lg has-text-primary border-bot">
              Contact us at:
            </p>
            <ul class="is-size-7">
              <nuxt-link to="" tag="li">
                <span class="icon has-text-black"
                  ><i class="fab fa-2x fa-github-alt"></i
                ></span>
                <p
                  class="m-b-none m-l-md has-text-black has-text-weight-semibold"
                >
                  Github
                </p>
              </nuxt-link>
              <nuxt-link to="" tag="li">
                <span class="icon has-text-link"
                  ><i class="fab fa-2x fa-facebook-square"></i
                ></span>
                <p
                  class="m-b-none m-l-md has-text-link has-text-weight-semibold"
                >
                  Facebook
                </p>
              </nuxt-link>
              <nuxt-link to="" tag="li">
                <span class="icon has-text-white"
                  ><i class="fab fa-2x fa-twitter-square"></i
                ></span>
                <p
                  class="m-b-none m-l-md has-text-white has-text-weight-semibold"
                >
                  Twitter
                </p>
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </client-only>
</template>

<style lang="scss" scoped>
.border-bot {
  border-bottom: 2px solid #00d1b2;
}
.footer {
  padding-bottom: 2rem;
}
.is-flex {
  flex-direction: column;
}
.content {
  display: flex;
  justify-content: flex-end;
}
.inner-content {
  display: flex;
  flex-direction: column;
}
.inner-content p {
  margin-bottom: 0.5rem;
}
.inner-content ul {
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.inner-content li {
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  padding: 0 0.8rem;
  cursor: pointer;
}
.inner-content li:hover {
  background-color: #b1b0b0;
}

@media (max-width: 1060px) {
  .footer {
    padding-bottom: 4rem;
  }
  .content {
    justify-content: center;
  }
  .inner-content {
    padding: 1.25rem 1rem;
  }
  .inner-content ul {
    flex-direction: row;
  }
  .inner-content li {
    border-right: 2px solid #b1b0b0;
  }
  .inner-content li:last-child {
    border: none;
  }
}
</style>
