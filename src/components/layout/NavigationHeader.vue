<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
    <div class="container">
      <router-link class="navbar-brand fw-bolder fs-2" to="/">
        <span class> SofwanCoder/ </span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://blog.sofwancoder.com">Blog</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style="color: steelblue"
              target="_blank"
              href="https://bit.ly/SofwanCoderOnResume"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-brand {
  &:hover {
    color: #f00;
  }
}
</style>
