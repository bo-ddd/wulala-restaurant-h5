<template>
    <div class="nav-item">
        <div>
            <slot name="icon">
                <img v-if="icon" class="nav-icon" :src="icon" alt=''>
            </slot>
        </div>
        <div>
            <slot>{{text}}</slot>
        </div>
        <!-- <slot name="icon"></slot>
        <slot></slot> -->
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        icon?:string;
        text?:string;
        size?:string;
        gap?:string;
    }>();
    const { icon,text,size } = props
</script>

<style scoped>
    .nav-item{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: v-bind(gap);
    }
    .nav-item .nav-icon{
        width: v-bind(size+'rem');
        height: v-bind(size+'rem');
        border-radius: 1rem;
    }
</style>

