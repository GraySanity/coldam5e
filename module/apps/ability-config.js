/**
 * A simple form to set save throw configuration for a given ability score.
 * @extends {DocumentSheet}
 * @param {Actor} actor                   The Actor instance being displayed within the sheet.
 * @param {ApplicationOptions} options    Additional application configuration options.
 * @param {string} abilityId              The ability ID (e.g. "str")
 */
export default class ActorAbilityConfig extends DocumentSheet {

  constructor(actor, opts, abilityId) {
    super(actor, opts);
    this._abilityId = abilityId;
  }

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["coldam5e"],
      template: "systems/coldam5e/templates/apps/ability-config.html",
      width: 500,
      height: "auto"
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.format("COLDAM5E.AbilityConfigureTitle", {ability: CONFIG.COLDAM5E.abilities[this._abilityId]})}: ${this.document.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    return {
      ability: foundry.utils.getProperty(this.document.data._source, `data.abilities.${this._abilityId}`) || {},
      labelSaves: game.i18n.format("COLDAM5E.AbilitySaveConfigure", {ability: CONFIG.COLDAM5E.abilities[this._abilityId]}),
      labelChecks: game.i18n.format("COLDAM5E.AbilityCheckConfigure", {ability: CONFIG.COLDAM5E.abilities[this._abilityId]}),
      abilityId: this._abilityId,
      proficiencyLevels: {
        0: CONFIG.COLDAM5E.proficiencyLevels[0],
        1: CONFIG.COLDAM5E.proficiencyLevels[1]
      },
      bonusGlobalSave: getProperty(this.object.data._source, "data.bonuses.abilities.save"),
      bonusGlobalCheck: getProperty(this.object.data._source, "data.bonuses.abilities.check")
    };
  }
}
