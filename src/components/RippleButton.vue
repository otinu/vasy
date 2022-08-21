 <template>
  <div v-ripple.mouseover="'rgba(255, 255, 255, 0.35)'" class="button is-primary" style="margin: .5rem">Test</div>
</template>
 

<script>
// @ is an alias to /src
import RippleButton from "@/components/RippleButton.vue";
// import LoadingTop from '@/components/LoadingTop.vue'

export default {
  name: "RippleButton",
  props: {
    msg: "MouseOver",
  },
  components: {
    RippleButton,
  },
};
</script>