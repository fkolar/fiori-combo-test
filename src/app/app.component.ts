import {
  AfterViewInit,
  ChangeDetectorRef,
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector, ModuleWithComponentFactories,
  NgModuleFactory,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ComboboxComponent, ComboboxSelectionChangeEvent, PlatformComboboxModule} from '@fundamental-ngx/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('comboVC', {read: ViewContainerRef})
  vc: ViewContainerRef;

  dataSource = [
    'Apple',
    'Banana',
    'Pineapple',
    'Strawberry',
    'Broccoli',
    'Carrot',
    'Jalapeño',
    'Spinach'
  ];
  selectedItem: any;


  constructor(private cfr: ComponentFactoryResolver,
              private cd: ChangeDetectorRef,
              private compiler: Compiler,
              private _injector: Injector,
  ) {

  }

  ngAfterViewInit(): void {
    // this.renderWithCFR();
    this.renderWithCompilerNoComboModuleImportNeeded();
    this.cd.detectChanges();
  }


  private renderWithCFRImportRequired() {
    let componentComponentFactory: ComponentFactory<ComboboxComponent> = this.cfr
      .resolveComponentFactory(ComboboxComponent);
    const component: ComponentRef<ComboboxComponent> = this.vc.createComponent(componentComponentFactory);

    component.instance.dataSource = this.dataSource;
    component.instance.name = 'standard2';
    component.instance.placeholder = 'standard2 placeholder';
  }

  onSelect1(item: ComboboxSelectionChangeEvent): void {
    this.selectedItem = item.payload;
  }



  private async renderWithCompilerNoComboModuleImportNeeded(): Promise<void> {
    const module  = await this.compiler.compileModuleAsync(PlatformComboboxModule);
    // const module  = await this.compiler.compileModuleAndAllComponentsAsync(PlatformComboboxModule);
    let ngModuleRef = module.create(this._injector);
    const cmdFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(ComboboxComponent)
    // const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<ComboboxComponent>  = this.vc.createComponent(cmdFactory);

    component.instance.dataSource = this.dataSource;
    component.instance.name = 'standard2';
    component.instance.placeholder = 'standard2 placeholder';
  }
}
