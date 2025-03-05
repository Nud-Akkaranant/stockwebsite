import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isModalOpen = false;
  isConfirmModalOpen = false;

  product = {
    name: '',
    code: '',
    category: '',
    price: null,
    description: '',
    quantity: null,
    imageUrl: ''
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openConfirmModal() {
    this.isConfirmModalOpen = true;
  }

  closeConfirmModal() {
    this.isConfirmModalOpen = false;
  }

  saveProduct() {
    // เปิด Popup ยืนยันก่อนบันทึก
    this.openConfirmModal();
  }

  confirmSave() {
    console.log('✅ บันทึกสินค้าสำเร็จ:', this.product);
    this.closeConfirmModal();
    this.closeModal();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.product.imageUrl = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
