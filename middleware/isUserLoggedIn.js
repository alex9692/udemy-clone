export default function({ store, redirect }) {
  if (store.state.auth.isAuth) {
    return redirect("/");
  }
}
