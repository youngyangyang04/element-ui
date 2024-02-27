<template>
  <div>
    <MyTable :columns="tableColumns">
      <template v-slot:header>
        <th>Custom Header 1</th>
        <th>Custom Header 2</th>
      </template>

      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
      <!-- More rows... -->

      <template v-slot:pagination>
        <Pagination :total="total" :current-page="currentPage" @page-change="handlePageChange" />
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/Table/Table.vue'; // 请根据你的项目结构和文件路径进行调整
import Pagination from '@/components/Pagination/Pagination.vue'; // 请根据你的项目结构和文件路径进行调整

export default {
  name: 'TableView',
  components: {
    MyTable,
    Pagination,
  },
  data() {
    return {
      tableColumns: [
        { key: 'column1', label: 'Column 1' },
        { key: 'column2', label: 'Column 2' },
      ],
      total: 100,
      currentPage: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
      // Fetch data for the new page...
    },
  },
};
</script>
