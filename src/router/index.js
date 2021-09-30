import {createRouter,createWebHashHistory} from 'vue-router'
import ValidationUsingYup from '@/components/CompositionAPI/ValidationUsingYup'
import veeValidationRule from '@/components/CompositionAPI/veeValidationRule'

const routes = [
  { path: '/veeValidationRule', component: veeValidationRule },
  { path: '/validationUsingYup', component: ValidationUsingYup },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router