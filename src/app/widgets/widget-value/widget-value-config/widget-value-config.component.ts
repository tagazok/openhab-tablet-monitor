import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageRoomComponent } from '../../../settings/manage-room/manage-room.component';
import { ConfigService } from '../../../shared/config.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-widget-value-config',
  templateUrl: './widget-value-config.component.html',
  styleUrls: ['./widget-value-config.component.css']
})
export class WidgetValueConfigComponent implements OnInit {
  form: FormGroup;
  
  constructor(public configService: ConfigService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageRoomComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
              }

  filters: Array<String> = ["number"];
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      item: [this.data.widget.item, Validators.required],
      label: [this.data.widget.config.label],
      icon: [this.data.widget.config.icon],
      preString : [this.data.widget.config.preString],
      postString: [this.data.widget.config.postString]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getItems() {
    return Object.values(this.configService.items);
  }

  saveField(path, field, value) {
    if (value) {
      path[field] = value;
    } else {
      delete path[field];
    }
  }

  save(form) {
    this.data.widget.item = form.value.item;
    this.saveField(this.data.widget.config, 'label', form.value.label);
    this.saveField(this.data.widget.config, 'preString', form.value.preString);
    this.saveField(this.data.widget.config, 'postString', form.value.postString);
    
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
