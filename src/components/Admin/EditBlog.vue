<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <div class="container">
              <form @submit.prevent="editBlog">
                <div class="row">
                  <div class="mb-2 col-6">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Title</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      v-model="blog.title"
                    />
                  </div>
                  <div class="mb-2 col-6">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Product</label
                    >
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="blog.product"
                    >
                      <option selected>Choose product</option>
                      <option value="Keyboard Fonts Buddy">
                        Keyboard Fonts Buddy
                      </option>
                      <option value="Quottie">Quottie</option>
                      <option value="GetSynced">GetSynced</option>
                      <option value="Lazy Publish">Lazy Publish</option>
                      <option value="idVPN">idVPN</option>
                    </select>
                  </div>
                </div>
                <div class="mb-2">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Content</label
                  >
                  <editor
                    api-key="o9yufam13nedclni43n7aof8nyiab3ee9xy2i3xmmln2lqh6"
                    v-model="blog.description"
                    :init="{
                      height: 420,
                      selector: 'textarea#premiumskinsandicons-snow',
                      skin: 'snow',
                      icons: 'thin',
                      // icons: 'material',
                      // icons_url: 'https://www.example.com/icons/thin/icons.js',
                      plugins: 'quickbars image lists code table codesample',
                      toolbar:
                        'blocks | forecolor backcolor | bold italic underline strikethrough | link image blockquote codesample | align bullist numlist | code ',
                      height: 400,
                      content_style: 'body { margin: 2rem 10%; }',
                      //             height: 420,
                      //             plugins: [
                      //               'advlist autolink lists link image charmap print preview anchor',
                      //               'searchreplace visualblocks code fullscreen',
                      //               'insertdatetime media table paste code wordcount',
                      //             ],
                      //             extended_valid_elements:
                      //               'iframe[src|frameborder|style|scrolling|class|width|height|name|align]',
                      //             toolbar:
                      //               'undo redo | formatselect | bold italic backcolor | \
                      //  imageupload alignleft aligncenter alignright alignjustify | \
                      //  bullist numlist outdent indent | removeformat | help',
                    }"
                  />
                </div>
              </form>
            </div>
          </div>

          <div class="modal-footer row">
            <slot name="footer">
              <button
                class="col-6 modal-default-button btn btn-danger"
                @click="closeModal"
              >
                Close
              </button>
              <button
                class="col-6 modal-default-button btn btn-success mx-2"
                @click="editBlog"
              >
                Save
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "EditBlog",
  components: {
    editor: Editor,
  },
  props: {
    show: Boolean,
    blogData: Object,
  },
  data() {
    return {
      blog: {
        title: "",
        description: "",
        createdAt: new Date(),
        product: "",
      },
    };
  },
  watch: {
    blogData() {
      this.blog = this.blogData;
    },
  },
  methods: {
    editBlog() {
      this.$emit("updateBlog", this.blog);
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.col-5 {
  width: 40%;
}

.col-6 {
  width: 48%;
}

.file-input > input {
  border: none;
}

input,
select {
  width: 100%;
  margin: 2px;
  outline: none;
  padding: 8px;
  border-radius: 9px;
  border: 1px solid gray;
}

button {
  border: none;
  outline: none;
  padding: 8px;
  width: 100%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 8px;
  background: lightblue;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 775px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.tox-tinymce-aux {
  z-index: 99999999999 !important;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
