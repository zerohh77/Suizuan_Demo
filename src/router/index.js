import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/', // 直接跳转到就跳转到首页，不经过login
    redirect: '/datamanage'
  },

  {
    path: '/datamanage', // 单个/就跳转到咱们的首页
    component: Layout,
    redirect: '/datamanage/dataloading',
    name: 'DataManage',
    meta: { title: '数据管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'dataloading',
        name: 'DataLoading',
        component: () => import('@/views/datamanage/DataLoading'),
        meta: { title: '数据加载', icon: 'table' }
      },
      {
        path: 'dataprocessing',
        name: 'DataPreProcessing',
        component: () => import('@/views/datamanage/DataPreProcessing'),
        meta: { title: '数据预处理', icon: 'tree' }
      },
      {
        path: 'SATK',
        name: 'SATK',
        component: () => import('@/views/datamanage/SATK'),
        meta: { title: '地震属性提取', icon: 'tree' }
      }
    ]
  },

  {
    path: '/dataprocessing',
    component: Layout,
    redirect: '/dataprocessing/waveletextraction',
    name: 'DataProcessing',
    meta: { title: '资料处理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'waveletextraction',
        name: 'WaveletExtraction',
        component: () => import('@/views/dataprocessing/WaveletExtraction'),
        meta: { title: '子波提取', icon: 'table' }
      },
      {
        path: 'spreadspectrum',
        name: 'SpreadSpectrum',
        component: () => import('@/views/dataprocessing/SpreadSpectrum'),
        meta: { title: '频谱拓展', icon: 'tree' }
      },
      {
        path: 'intervalvelocityestimation',
        name: 'IntervalVelocityEstimation',
        component: () => import('@/views/dataprocessing/IntervalVelocityEstimation'),
        meta: { title: '层速度估计', icon: 'tree' }
      }
    ]
  },

  {
    path: '/structural',
    component: Layout,
    redirect: '/structural/horizoncalibration',
    name: 'Structural',
    meta: { title: '构造解释', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'horizoncalibration',
        name: 'HorizonCalibration',
        component: () => import('@/views/structural/HorizonCalibration'),
        meta: { title: '层位标定', icon: 'table' }
      },
      {
        path: 'faultextraction',
        name: 'FaultExtraction',
        component: () => import('@/views/structural/FaultExtraction'),
        meta: { title: '断裂提取', icon: 'tree' }
      },
      {
        path: 'specicalrockrecognization',
        name: 'SpecicalRockRecognization',
        component: () => import('@/views/structural/SpecicalRockRecognization'),
        meta: { title: '特殊岩体识别', icon: 'tree' }
      }
    ]
  },

  {
    path: '/rockphysics',
    component: Layout,
    redirect: '/rockphysics/anisotropicparameters',
    name: 'RockPhysics',
    meta: { title: '岩石物理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'rockphysicsanalysis',
        name: 'RockPhysicsAnalysis',
        component: () => import('@/views/rockphysics/RockPhysicsAnalysis'),
        meta: { title: '岩石物理分析', icon: 'tree' }
      },
      {
        path: 'geomechanicaanalysis',
        name: 'GeomechanicaAnalysis',
        component: () => import('@/views/rockphysics/GeomechanicaAnalysis'),
        meta: { title: '地质力学分析', icon: 'tree' }
      },
      {
        path: 'anisotropicparameters',
        name: 'AnisotropicParameters',
        component: () => import('@/views/rockphysics/AnisotropicParameters'),
        meta: { title: '各向异性参数提取', icon: 'table' }
      }
    ]
  },

  {
    path: '/prediction',
    component: Layout,
    redirect: '/prediction/dataloading',
    name: 'Prediction',
    meta: { title: '智能探测', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'elasticparameters',
        name: 'ElasticParameters',
        component: () => import('@/views/prediction/ElasticParameters'),
        meta: { title: '弹性参数预测', icon: 'table' }
      },
      {
        path: 'formationpressureparameters',
        name: 'FormationPressureParameters',
        component: () => import('@/views/prediction/FormationPressureParameters'),
        meta: { title: '地层压力预测', icon: 'tree' }
      }
    ]
  },

  // {
  //   path: '/', // 单个/就跳转到咱们的首页
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },
  //
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
