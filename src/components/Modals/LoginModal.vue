<template>
  <div>
    <ModalBox
      :show-modal="showModal"
      class-modal="!bg-[#1D2939] text-white !w-[80%] md:!w-[50%] cs-modal"
      @handleClose="closeModal"
    >
      <div class="text-white container mx-auto md:px-4 break-normal break-words">
        <header class="mx-auto">
          <h2 class="text-center text-2xl md:text-4xl mb-9">{{ $t('lbl_login') }}</h2>
        </header>
        <el-form
          :rules="rules"
          ref="ruleForm"
          class="cs-form"
          label-position="top"
          label-width="200px"
          :model="form"
        >
          <el-form-item :label="$t('lbl_email')" prop="email">
            <el-input :placeholder="$t('lbl_enter_email')" v-model="form.email"></el-input>
          </el-form-item>

          <el-form-item :label="$t('lbl_password')" prop="password">
            <el-input
              show-password
              type="password"
              :placeholder="$t('lbl_enter_password')"
              v-model="form.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex items-center justify-center">
              <el-button
                native-type="submit"
                :disabled="isLoading"
                class="mx-auto w-[150px] !bg-[#d6b893] !outline-[#ebbd86] !border-[#ebbd86] !h-10 !text-[#1D2939] !mt-4"
                type="primary"
                @click="submitForm"
              >{{ $t('lbl_submit') }}</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <!-- <template #footer>
       
      </template>-->
    </ModalBox>
  </div>
</template>
  
  <script>
import ModalBox from "@/components/Modals/index.vue";
import appUtils from "@/utils/appUtils";

export default {
  name: "LoginModal",
  components: {
    ModalBox
  },
  props: {
    showModal: Boolean
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      isLoading: false
    };
  },

  computed: {
    rules() {
      return {
        email: [
          {
            required: true,
            message: this.$t("lbl_email_required"),
            trigger: "blur"
          },
          {
            type: "email",
            message: this.$t("lbl_incorrect_email"),
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("lbl_password_required"),
            trigger: "blur"
          }
        ]
      };
    }
  },
  mounted() {
    this.$refs.ruleForm?.resetFields();
  },
  watch: {},
  methods: {
    closeModal() {
      this.$emit("onClose");
      this.form = {
        email: "",
        password: ""
      };
      this.$refs.ruleForm.resetFields();
    },
    submitForm(e) {
      e.preventDefault();

      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.handleLogin();
        } else {
          return false;
        }
      });
    },
    async handleLogin() {
      try {
        this.isLoading = true;

        const params = {
          ...this.form
        };

        const response = await this.$rf.getRequest("AuthRequest").login(params);
        const jwtToken = response.data?.accessToken;
        if (jwtToken) {
          this.$store.commit("auth/setToken", jwtToken);
          appUtils.setLocalToken(jwtToken);

          const isUserInfo = await this.handleGetUserInfo();

          if (isUserInfo) {
            this.$router.replace({ name: "Home" });
            this.closeModal();

            window.$toast.success({
              message: this.$t("lbl_login_success")
            });
          }
        }
      } catch (error) {
        if (error.response?.data) {
          window.$toast.error({
            message: this.$t("lbl_error_email_or_password")
          });
        } else {
          window.$toast.error({
            message: this.$t("lbl_error_login")
          });
        }
      } finally {
        this.isLoading = false;
      }
    },
    async handleGetUserInfo() {
      try {
        const response = await this.$rf.getRequest("AuthRequest").me();

        const userInfo = response?.data;

        this.$store.commit("auth/setUserInfo", userInfo);

        return true;
      } catch (error) {
        console.log(error);
        window.$toast.error({
          message: this.$t("lbl_error_login")
        });
        return false;
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
  
<style lang="scss" scoped>
::v-deep {
  p {
    @apply mb-4;
  }
  .cs-form {
    .el-form-item__label {
      color: #ebbd86;
      font-size: 18px;
    }
  }

  .cs-modal {
    .el-dialog__footer {
      padding: 0 !important;
    }
  }
}
</style>
  