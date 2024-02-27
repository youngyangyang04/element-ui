<template>
  <div>
    <!-- Your content goes here -->

    <MyPagination :total="totalItems" :current-page="currentPage" @page-change="handlePageChange" />
  </div>
</template>

<script>
import MyPagination from '@/components/Pagination/Pagination.vue'; // 请根据你的项目结构和文件路径进行调整

export default {
  name: 'PaginationView',
  components: {
    MyPagination,
  },
  data() {
    return {
      totalItems: 100,
      currentPage: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      // Fetch data for the new page...
      this.currentPage = newPage;
    },
  },
};
</script>
