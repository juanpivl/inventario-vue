export default{
    name: 'inventario',
    component: () => import(/* webpackChunkName: "inventario" */ '@/modules/inventario/layouts/InventarioLayout.vue'),
    children: [
        {
            path: '',
            name: 'inicio',
            component: () => import(/* webpackChunkName: "daybook-inicio" */ '@/modules/inventario/views/InicioView.vue'),
        },
        
        {
            path: '/productos',
            name: 'productos',
            component: () => import(/* webpackChunkName: "daybook-productos" */ '@/modules/inventario/views/ProductosView.vue'),
        },
    ]
}