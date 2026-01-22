/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AyatanaAppIndicatorGlib?version=2.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AyatanaAppIndicatorGlib {
        /**
         * AyatanaAppIndicatorGlib-2.0
         */

        /**
         * The category provides grouping for the indicators so that
         * users can find indicators that are similar together.
         */

        /**
         * The category provides grouping for the indicators so that
         * users can find indicators that are similar together.
         */
        export namespace IndicatorCategory {
            export const $gtype: GObject.GType<IndicatorCategory>;
        }

        enum IndicatorCategory {
            /**
             * The indicator is used to display the status of the application.
             */
            APPLICATION_STATUS,
            /**
             * The application is used for communication with other people.
             */
            COMMUNICATIONS,
            /**
             * A system indicator relating to something in the user's system.
             */
            SYSTEM_SERVICES,
            /**
             * An indicator relating to the user's hardware.
             */
            HARDWARE,
            /**
             * Something not defined in this enum, please don't use unless you really need it.
             */
            OTHER,
        }
        /**
         * These are the states that the indicator can be on in
         * the user's panel.  The indicator by default starts
         * in the state `APP_INDICATOR_STATUS_PASSIVE` and can be
         * shown by setting it to `APP_INDICATOR_STATUS_ACTIVE`.
         */

        /**
         * These are the states that the indicator can be on in
         * the user's panel.  The indicator by default starts
         * in the state `APP_INDICATOR_STATUS_PASSIVE` and can be
         * shown by setting it to `APP_INDICATOR_STATUS_ACTIVE`.
         */
        export namespace IndicatorStatus {
            export const $gtype: GObject.GType<IndicatorStatus>;
        }

        enum IndicatorStatus {
            /**
             * The indicator should not be shown to the user.
             */
            PASSIVE,
            /**
             * The indicator should be shown in it's default state.
             */
            ACTIVE,
            /**
             * The indicator should show it's attention icon.
             */
            ATTENTION,
        }
        namespace Indicator {
            // Signal signatures
            interface SignalSignatures extends GObject.Object.SignalSignatures {
                'connection-changed': (arg0: boolean) => void;
                'new-attention-icon': () => void;
                'new-icon': () => void;
                'new-icon-theme-path': (arg0: string) => void;
                'new-label': (arg0: string, arg1: string) => void;
                'new-status': (arg0: string) => void;
                'new-tooltip': () => void;
                'scroll-event': (arg0: number, arg1: number) => void;
                'notify::actions': (pspec: GObject.ParamSpec) => void;
                'notify::attention-icon-desc': (pspec: GObject.ParamSpec) => void;
                'notify::attention-icon-name': (pspec: GObject.ParamSpec) => void;
                'notify::category': (pspec: GObject.ParamSpec) => void;
                'notify::connected': (pspec: GObject.ParamSpec) => void;
                'notify::icon-desc': (pspec: GObject.ParamSpec) => void;
                'notify::icon-name': (pspec: GObject.ParamSpec) => void;
                'notify::icon-theme-path': (pspec: GObject.ParamSpec) => void;
                'notify::id': (pspec: GObject.ParamSpec) => void;
                'notify::label': (pspec: GObject.ParamSpec) => void;
                'notify::label-guide': (pspec: GObject.ParamSpec) => void;
                'notify::menu': (pspec: GObject.ParamSpec) => void;
                'notify::ordering-index': (pspec: GObject.ParamSpec) => void;
                'notify::status': (pspec: GObject.ParamSpec) => void;
                'notify::title': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-description': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-icon-name': (pspec: GObject.ParamSpec) => void;
                'notify::tooltip-title': (pspec: GObject.ParamSpec) => void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                actions: string;
                attention_icon_desc: string;
                attentionIconDesc: string;
                attention_icon_name: string;
                attentionIconName: string;
                category: string;
                connected: boolean;
                icon_desc: string;
                iconDesc: string;
                icon_name: string;
                iconName: string;
                icon_theme_path: string;
                iconThemePath: string;
                id: string;
                label: string;
                label_guide: string;
                labelGuide: string;
                menu: string;
                ordering_index: number;
                orderingIndex: number;
                status: string;
                title: string;
                tooltip_description: string;
                tooltipDescription: string;
                tooltip_icon_name: string;
                tooltipIconName: string;
                tooltip_title: string;
                tooltipTitle: string;
            }
        }

        /**
         * An application indicator represents the values that are needed to
         * show a unique status in the panel for an application. In general,
         * applications should try to fit in the other indicators that are
         * available on the panel before creating a new indicator.
         */
        class Indicator extends GObject.Object {
            static $gtype: GObject.GType<Indicator>;

            // Properties

            /**
             * The action group that is associated with the menu items.
             */
            get actions(): string;
            set actions(val: string);
            /**
             * If the indicator sets its status to %APP_INDICATOR_STATUS_ATTENTION
             * then this is the textual description of the icon shown.
             */
            get attention_icon_desc(): string;
            set attention_icon_desc(val: string);
            /**
             * If the indicator sets its status to %APP_INDICATOR_STATUS_ATTENTION
             * then this is the textual description of the icon shown.
             */
            get attentionIconDesc(): string;
            set attentionIconDesc(val: string);
            /**
             * If the indicator sets its status to %APP_INDICATOR_STATUS_ATTENTION
             * then this icon is shown.
             */
            get attention_icon_name(): string;
            set attention_icon_name(val: string);
            /**
             * If the indicator sets its status to %APP_INDICATOR_STATUS_ATTENTION
             * then this icon is shown.
             */
            get attentionIconName(): string;
            set attentionIconName(val: string);
            /**
             * The type of indicator that this represents. Please don't use 'Other'.
             * Defaults to 'ApplicationStatus'.
             */
            get category(): string;
            /**
             * Whether we're conneced to a watcher. %TRUE if we have a
             * reasonable expectation of being displayed through this object.
             */
            get connected(): boolean;
            /**
             * The description of the regular icon that is shown for the indicator.
             */
            get icon_desc(): string;
            set icon_desc(val: string);
            /**
             * The description of the regular icon that is shown for the indicator.
             */
            get iconDesc(): string;
            set iconDesc(val: string);
            /**
             * The name of the regular icon that is shown for the indicator.
             */
            get icon_name(): string;
            set icon_name(val: string);
            /**
             * The name of the regular icon that is shown for the indicator.
             */
            get iconName(): string;
            set iconName(val: string);
            /**
             * An additional place to look for icon names that may be installed by the
             * application.
             */
            get icon_theme_path(): string;
            set icon_theme_path(val: string);
            /**
             * An additional place to look for icon names that may be installed by the
             * application.
             */
            get iconThemePath(): string;
            set iconThemePath(val: string);
            /**
             * The ID for this indicator, which should be unique, but used consistently
             * by this program and its indicator.
             */
            get id(): string;
            /**
             * A label that can be shown next to the string in the application
             * indicator. The label will not be shown unless there is an icon
             * as well. The label is useful for numerical and other frequently
             * updated information. In general, it shouldn't be shown unless a
             * user requests it as it can take up a significant amount of space
             * on the user's panel. This may not be shown in all visualizations.
             */
            get label(): string;
            set label(val: string);
            /**
             * An optional string to provide guidance to the panel on how big
             * the #AppIndicator:label string could get. If this is set
             * correctly then the panel should never 'jiggle' as the string
             * adjusts throughout the range of options. For instance, if you
             * were providing a percentage like "54% thrust" in
             * #AppIndicator:label you'd want to set this string to
             * "100% thrust" to ensure space when Scotty can get you enough
             * power.
             */
            get label_guide(): string;
            set label_guide(val: string);
            /**
             * An optional string to provide guidance to the panel on how big
             * the #AppIndicator:label string could get. If this is set
             * correctly then the panel should never 'jiggle' as the string
             * adjusts throughout the range of options. For instance, if you
             * were providing a percentage like "54% thrust" in
             * #AppIndicator:label you'd want to set this string to
             * "100% thrust" to ensure space when Scotty can get you enough
             * power.
             */
            get labelGuide(): string;
            set labelGuide(val: string);
            /**
             * The menu that should be shown when the Application Indicator
             * is clicked on in the panel.
             */
            get menu(): string;
            set menu(val: string);
            /**
             * The ordering index is an odd parameter, and if you think you
             * don't need it you're probably right. In general, the application
             * indicator service will try to place the indicators in a
             * recreatable place taking into account which category they're in
             * to try and group them. But, there are some cases when you'd want
             * to ensure indicators are next to each other. To do that you can
             * override the generated ordering index and replace it with a new
             * one. Again, you probably don't want to do this, but in case you
             * do, this is the way.
             */
            get ordering_index(): number;
            set ordering_index(val: number);
            /**
             * The ordering index is an odd parameter, and if you think you
             * don't need it you're probably right. In general, the application
             * indicator service will try to place the indicators in a
             * recreatable place taking into account which category they're in
             * to try and group them. But, there are some cases when you'd want
             * to ensure indicators are next to each other. To do that you can
             * override the generated ordering index and replace it with a new
             * one. Again, you probably don't want to do this, but in case you
             * do, this is the way.
             */
            get orderingIndex(): number;
            set orderingIndex(val: number);
            /**
             * Whether the indicator is shown or requests attention. Can be one of
             * 'Passive' (the indicator should not be shown), 'Active' (the indicator
             * should be shown in its default state), and 'Attention' (the indicator
             * should now show it's attention icon). Defaults to 'Passive'.
             */
            get status(): string;
            set status(val: string);
            /**
             * Provides a way to refer to this application indicator in a human
             * readable form.
             */
            get title(): string;
            set title(val: string);
            /**
             * The text of the indicator's tooltip.
             */
            get tooltip_description(): string;
            set tooltip_description(val: string);
            /**
             * The text of the indicator's tooltip.
             */
            get tooltipDescription(): string;
            set tooltipDescription(val: string);
            /**
             * The name of the tooltip's themed icon.
             */
            get tooltip_icon_name(): string;
            set tooltip_icon_name(val: string);
            /**
             * The name of the tooltip's themed icon.
             */
            get tooltipIconName(): string;
            set tooltipIconName(val: string);
            /**
             * The title of the indicator's tooltip.
             */
            get tooltip_title(): string;
            set tooltip_title(val: string);
            /**
             * The title of the indicator's tooltip.
             */
            get tooltipTitle(): string;
            set tooltipTitle(val: string);

            /**
             * Compile-time signal type information.
             *
             * This instance property is generated only for TypeScript type checking.
             * It is not defined at runtime and should not be accessed in JS code.
             * @internal
             */
            $signals: Indicator.SignalSignatures;

            // Constructors

            constructor(properties?: Partial<Indicator.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, icon_name: string, category: IndicatorCategory): Indicator;

            static new_with_path(
                id: string,
                icon_name: string,
                category: IndicatorCategory,
                icon_theme_path: string,
            ): Indicator;

            // Signals

            connect<K extends keyof Indicator.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>,
            ): number;
            connect(signal: string, callback: (...args: any[]) => any): number;
            connect_after<K extends keyof Indicator.SignalSignatures>(
                signal: K,
                callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>,
            ): number;
            connect_after(signal: string, callback: (...args: any[]) => any): number;
            emit<K extends keyof Indicator.SignalSignatures>(
                signal: K,
                ...args: GObject.GjsParameters<Indicator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
            ): void;
            emit(signal: string, ...args: any[]): void;

            // Virtual methods

            vfunc_connection_changed(connected: boolean): void;
            vfunc_new_attention_icon(user_data?: any | null): void;
            vfunc_new_icon(user_data?: any | null): void;
            vfunc_new_icon_theme_path(icon_theme_path: string): void;
            vfunc_new_label(label: string, guide: string): void;
            vfunc_new_status(status: string): void;
            vfunc_new_tooltip(user_data?: any | null): void;
            vfunc_scroll_event(delta: number, direction: number): void;

            // Methods

            /**
             * Gets the action group associated with the menu items.
             *
             * Wrapper function for property #AppIndicator:actions.
             * @returns The `GSimpleActionGroup` object or %NULL if it hasn't been set
             */
            get_actions(): Gio.SimpleActionGroup;
            /**
             * Wrapper function for property #AppIndicator:attention-icon-name.
             * @returns The current attention icon name
             */
            get_attention_icon(): string;
            /**
             * Wrapper function for property #AppIndicator:attention-icon-desc.
             * @returns The current attention icon description
             */
            get_attention_icon_desc(): string;
            /**
             * Wrapper function for property #AppIndicator:category.
             * @returns The current category
             */
            get_category(): IndicatorCategory;
            /**
             * Wrapper function for property #AppIndicator:icon-name.
             * @returns The current icon name
             */
            get_icon(): string;
            /**
             * Wrapper function for property #AppIndicator:icon-desc.
             * @returns The current icon description
             */
            get_icon_desc(): string;
            /**
             * Wrapper function for property #AppIndicator:icon-theme-path.
             * @returns The current icon theme path
             */
            get_icon_theme_path(): string;
            /**
             * Wrapper function for property #AppIndicator:id.
             * @returns The current ID
             */
            get_id(): string;
            /**
             * Wrapper function for property #AppIndicator:label.
             * @returns The current label
             */
            get_label(): string;
            /**
             * Wrapper function for property #AppIndicator:label-guide.
             * @returns The current label guide
             */
            get_label_guide(): string;
            /**
             * Gets the menu being used for this application indicator.
             *
             * Wrapper function for property #AppIndicator:menu.
             * @returns The `GMenu` object or %NULL if it hasn't been set
             */
            get_menu(): Gio.Menu;
            /**
             * Wrapper function for property #AppIndicator:ordering-index.
             * @returns The current ordering index
             */
            get_ordering_index(): number;
            /**
             * Gets the action being activated on secondary-activate event.
             * @returns The action name or %NULL if none has been set.
             */
            get_secondary_activate_target(): string;
            /**
             * Wrapper function for property #AppIndicator:status.
             * @returns The current status
             */
            get_status(): IndicatorStatus;
            /**
             * Gets the title of the application indicator. See the function
             * app_indicator_set_title () for information on the title.
             * @returns The current title
             */
            get_title(): string;
            /**
             * Sets the action group that will be associated with the menu items. An
             * application indicator will not be rendered unless it has actions.
             *
             * Wrapper function for property #AppIndicator:actions.
             * @param actions A `GSimpleActionGroup` to set
             */
            set_actions(actions: Gio.SimpleActionGroup): void;
            /**
             * Wrapper function for property #AppIndicator:attention-icon-name
             * @param icon_name The name of the attention icon to set for this indicator
             * @param icon_desc A textual description of the icon
             */
            set_attention_icon(icon_name: string, icon_desc?: string | null): void;
            /**
             * Sets the default icon to use when the status is active but not set to
             * attention. In most cases, this should be the application icon for the
             * program.
             *
             * Wrapper function for property #AppIndicator:icon-name and
             * #AppIndicator:icon-desc
             * @param icon_name The icon name to set
             * @param icon_desc A description of the icon for accessibility
             */
            set_icon(icon_name: string, icon_desc?: string | null): void;
            /**
             * Sets the path to use when searching for icons.
             * @param icon_theme_path The icon theme path to set
             */
            set_icon_theme_path(icon_theme_path: string): void;
            /**
             * This is a wrapper function for the #AppIndicator:label and
             * #AppIndicator:label-guide properties. This function can take #NULL
             * as either `label` or `guide` and will clear the entries.
             * @param label The label to show next to the icon
             * @param guide A guide to size the label correctly
             */
            set_label(label: string, guide: string): void;
            /**
             * Sets the menu that should be shown when the Application Indicator
             * is activated in the panel. An application indicator will not be
             * rendered unless it has a menu.
             *
             * ::: important
             *     All menu item actions must be prefixed with the ``indicator.``
             *     namespace:
             *
             *     GSimpleaction *pAction = g_simple_action_new ("newimage", NULL);
             *
             *     ...
             *
             *     GMenuItem *pItem = g_menu_item_new ("New Image", "indicator.newimage");
             *
             *     ...
             *
             * Wrapper function for property #AppIndicator:menu.
             * @param menu A `GMenu` to set
             */
            set_menu(menu?: Gio.Menu | null): void;
            /**
             * Sets the ordering index for the app indicator which affects its
             * placement on the panel. For almost all app indicators this is not the
             * function you're looking for.
             *
             * Wrapper function for property #AppIndicator:ordering-index.
             * @param ordering_index A value for the ordering of this app indicator
             */
            set_ordering_index(ordering_index: number): void;
            /**
             * Set the `action` to be activated when a secondary activation event
             * (i.e. a middle-click) is emitted over the #AppIndicator icon/label.
             *
             * For the `action` to get activated when a secondary activation occurs
             * in the #AppIndicator, it must be defined as a stateless #GAction with
             * no parameter, it needs to be enabled and associated with an item of
             * the #AppIndicator:menu.
             *
             * Setting `action` to %NULL disables this feature.
             * @param action The action to be activated on secondary activation
             */
            set_secondary_activate_target(action?: string | null): void;
            /**
             * Wrapper function for property #AppIndicator:status
             * @param status The status to set for this indicator
             */
            set_status(status: IndicatorStatus | null): void;
            /**
             * Sets the title of the application indicator, or how it should be
             * referred to in a human readable form. This string should be UTF-8 and
             * localized, as it is expected that users will set it.
             *
             * Setting `title` to %NULL removes the title.
             * @param title Title of the app indicator
             */
            set_title(title?: string | null): void;
            /**
             * If `icon_name` is %NULL, the tooltip will not have an icon.
             * If `title` is %NULL, the indicator will not have a tooltip.
             * If `description` is %NULL, the tooltip will not have a description.
             *
             * Sets the #AppIndicator:tooltip-icon-name, #AppIndicator:tooltip-title and
             * #AppIndicator:tooltip-description properties.
             * @param icon_name The name of the tooltip's themed icon
             * @param title The tooltip's title
             * @param description The tooltip's detailed description
             */
            set_tooltip(icon_name: string | null, title: string, description?: string | null): void;
        }

        type IndicatorClass = typeof Indicator;
        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default AyatanaAppIndicatorGlib;
}

declare module 'gi://AyatanaAppIndicatorGlib' {
    import AyatanaAppIndicatorGlib20 from 'gi://AyatanaAppIndicatorGlib?version=2.0';
    export default AyatanaAppIndicatorGlib20;
}
// END
