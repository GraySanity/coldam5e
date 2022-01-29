import {ClassFeatures} from "./classFeatures.js";

// Namespace Configuration Values
export const COLDAM5E = {};

// ASCII Artwork
COLDAM5E.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system.
 * @enum {string}
 */
COLDAM5E.abilities = {
  str: "COLDAM5E.AbilityStr",
  dex: "COLDAM5E.AbilityDex",
  con: "COLDAM5E.AbilityCon",
  int: "COLDAM5E.AbilityInt",
  wis: "COLDAM5E.AbilityWis",
  cha: "COLDAM5E.AbilityCha"
};

/**
 * Localized abbreviations for Ability Scores.
 * @enum {string}
 */
COLDAM5E.abilityAbbreviations = {
  str: "COLDAM5E.AbilityStrAbbr",
  dex: "COLDAM5E.AbilityDexAbbr",
  con: "COLDAM5E.AbilityConAbbr",
  int: "COLDAM5E.AbilityIntAbbr",
  wis: "COLDAM5E.AbilityWisAbbr",
  cha: "COLDAM5E.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options.
 * @enum {string}
 */
COLDAM5E.alignments = {
  lg: "COLDAM5E.AlignmentLG",
  ng: "COLDAM5E.AlignmentNG",
  cg: "COLDAM5E.AlignmentCG",
  ln: "COLDAM5E.AlignmentLN",
  tn: "COLDAM5E.AlignmentTN",
  cn: "COLDAM5E.AlignmentCN",
  le: "COLDAM5E.AlignmentLE",
  ne: "COLDAM5E.AlignmentNE",
  ce: "COLDAM5E.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types.
 * @enum {number}
 */
COLDAM5E.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2
};

/**
 * An enumeration of item attunement states.
 * @type {{"0": string, "1": string, "2": string}}
 */
COLDAM5E.attunements = {
  0: "COLDAM5E.AttunementNone",
  1: "COLDAM5E.AttunementRequired",
  2: "COLDAM5E.AttunementAttuned"
};

/* -------------------------------------------- */

/**
 * General weapon categories.
 * @enum {string}
 */
COLDAM5E.weaponProficiencies = {
  sim: "COLDAM5E.WeaponSimpleProficiency",
  mar: "COLDAM5E.WeaponMartialProficiency"
};

/**
 * A mapping between `COLDAM5E.weaponTypes` and `COLDAM5E.weaponProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
COLDAM5E.weaponProficienciesMap = {
  natural: true,
  simpleM: "sim",
  simpleR: "sim",
  martialM: "mar",
  martialR: "mar"
};

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
COLDAM5E.weaponIds = {
  battleaxe: "I0WocDSuNpGJayPb",
  blowgun: "wNWK6yJMHG9ANqQV",
  club: "nfIRTECQIG81CvM4",
  dagger: "0E565kQUBmndJ1a2",
  dart: "3rCO8MTIdPGSW6IJ",
  flail: "UrH3sMdnUDckIHJ6",
  glaive: "rOG1OM2ihgPjOvFW",
  greataxe: "1Lxk6kmoRhG8qQ0u",
  greatclub: "QRCsxkCwWNwswL9o",
  greatsword: "xMkP8BmFzElcsMaR",
  halberd: "DMejWAc8r8YvDPP1",
  handaxe: "eO7Fbv5WBk5zvGOc",
  handcrossbow: "qaSro7kFhxD6INbZ",
  heavycrossbow: "RmP0mYRn2J7K26rX",
  javelin: "DWLMnODrnHn8IbAG",
  lance: "RnuxdHUAIgxccVwj",
  lightcrossbow: "ddWvQRLmnnIS0eLF",
  lighthammer: "XVK6TOL4sGItssAE",
  longbow: "3cymOVja8jXbzrdT",
  longsword: "10ZP2Bu3vnCuYMIB",
  mace: "Ajyq6nGwF7FtLhDQ",
  maul: "DizirD7eqjh8n95A",
  morningstar: "dX8AxCh9o0A9CkT3",
  net: "aEiM49V8vWpWw7rU",
  pike: "tC0kcqZT9HHAO0PD",
  quarterstaff: "g2dWN7PQiMRYWzyk",
  rapier: "Tobce1hexTnDk4sV",
  scimitar: "fbC0Mg1a73wdFbqO",
  shortsword: "osLzOwQdPtrK3rQH",
  sickle: "i4NeNZ30ycwPDHMx",
  spear: "OG4nBBydvmfWYXIk",
  shortbow: "GJv6WkD7D2J6rP6M",
  sling: "3gynWO9sN4OLGMWD",
  trident: "F65ANO66ckP8FDMa",
  warpick: "2YdfjN1PIIrSHZii",
  warhammer: "F0Df164Xv1gWcYt0",
  whip: "QKTyxoO0YDnAsbYe"
};

/* -------------------------------------------- */

/**
 * The categories into which Tool items can be grouped.
 *
 * @enum {string}
 */
COLDAM5E.toolTypes = {
  art: "COLDAM5E.ToolArtisans",
  game: "COLDAM5E.ToolGamingSet",
  music: "COLDAM5E.ToolMusicalInstrument"
};

/**
 * The categories of tool proficiencies that a character can gain.
 *
 * @enum {string}
 */
COLDAM5E.toolProficiencies = {
  ...COLDAM5E.toolTypes,
  vehicle: "COLDAM5E.ToolVehicle"
};

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
COLDAM5E.toolIds = {
  alchemist: "SztwZhbhZeCqyAes",
  bagpipes: "yxHi57T5mmVt0oDr",
  brewer: "Y9S75go1hLMXUD48",
  calligrapher: "jhjo20QoiD5exf09",
  card: "YwlHI3BVJapz4a3E",
  carpenter: "8NS6MSOdXtUqD7Ib",
  cartographer: "fC0lFK8P4RuhpfaU",
  chess: "23y8FvWKf9YLcnBL",
  cobbler: "hM84pZnpCqKfi8XH",
  cook: "Gflnp29aEv5Lc1ZM",
  dice: "iBuTM09KD9IoM5L8",
  disg: "IBhDAr7WkhWPYLVn",
  drum: "69Dpr25pf4BjkHKb",
  dulcimer: "NtdDkjmpdIMiX7I2",
  flute: "eJOrPcAz9EcquyRQ",
  forg: "cG3m4YlHfbQlLEOx",
  glassblower: "rTbVrNcwApnuTz5E",
  herb: "i89okN7GFTWHsvPy",
  horn: "aa9KuBy4dst7WIW9",
  jeweler: "YfBwELTgPFHmQdHh",
  leatherworker: "PUMfwyVUbtyxgYbD",
  lute: "qBydtUUIkv520DT7",
  lyre: "EwG1EtmbgR3bM68U",
  mason: "skUih6tBvcBbORzA",
  navg: "YHCmjsiXxZ9UdUhU",
  painter: "ccm5xlWhx74d6lsK",
  panflute: "G5m5gYIx9VAUWC3J",
  pois: "il2GNi8C0DvGLL9P",
  potter: "hJS8yEVkqgJjwfWa",
  shawm: "G3cqbejJpfB91VhP",
  smith: "KndVe2insuctjIaj",
  thief: "woWZ1sO5IUVGzo58",
  tinker: "0d08g1i5WXnNrCNA",
  viol: "baoe3U5BfMMMxhCU",
  weaver: "ap9prThUB2y9lDyj",
  woodcarver: "xKErqkLo4ASYr5EP"
};

/* -------------------------------------------- */

/**
 * The various lengths of time over which effects can occur.
 * @enum {string}
 */
COLDAM5E.timePeriods = {
  inst: "COLDAM5E.TimeInst",
  turn: "COLDAM5E.TimeTurn",
  round: "COLDAM5E.TimeRound",
  minute: "COLDAM5E.TimeMinute",
  hour: "COLDAM5E.TimeHour",
  day: "COLDAM5E.TimeDay",
  month: "COLDAM5E.TimeMonth",
  year: "COLDAM5E.TimeYear",
  perm: "COLDAM5E.TimePerm",
  spec: "COLDAM5E.Special"
};

/* -------------------------------------------- */

/**
 * Various ways in which an item or ability can be activated.
 * @enum {string}
 */
COLDAM5E.abilityActivationTypes = {
  none: "COLDAM5E.None",
  action: "COLDAM5E.Action",
  bonus: "COLDAM5E.BonusAction",
  reaction: "COLDAM5E.Reaction",
  minute: COLDAM5E.timePeriods.minute,
  hour: COLDAM5E.timePeriods.hour,
  day: COLDAM5E.timePeriods.day,
  special: COLDAM5E.timePeriods.spec,
  legendary: "COLDAM5E.LegendaryActionLabel",
  lair: "COLDAM5E.LairActionLabel",
  crew: "COLDAM5E.VehicleCrewAction"
};

/* -------------------------------------------- */

/**
 * Different things that an ability can consume upon use.
 * @enum {string}
 */
COLDAM5E.abilityConsumptionTypes = {
  ammo: "COLDAM5E.ConsumeAmmunition",
  attribute: "COLDAM5E.ConsumeAttribute",
  material: "COLDAM5E.ConsumeMaterial",
  charges: "COLDAM5E.ConsumeCharges"
};

/* -------------------------------------------- */

/**
 * Creature sizes.
 * @enum {string}
 */
COLDAM5E.actorSizes = {
  tiny: "COLDAM5E.SizeTiny",
  sm: "COLDAM5E.SizeSmall",
  med: "COLDAM5E.SizeMedium",
  lg: "COLDAM5E.SizeLarge",
  huge: "COLDAM5E.SizeHuge",
  grg: "COLDAM5E.SizeGargantuan"
};

/**
 * Default token image size for the values of `COLDAM5E.actorSizes`.
 * @enum {number}
 */
COLDAM5E.tokenSizes = {
  tiny: 0.5,
  sm: 1,
  med: 1,
  lg: 2,
  huge: 3,
  grg: 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars.
 * @enum {number}
 */
COLDAM5E.tokenHPColors = {
  damage: 0xFF0000,
  healing: 0x00FF00,
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
};

/* -------------------------------------------- */

/**
 * Default types of creatures.
 * @enum {string}
 */
COLDAM5E.creatureTypes = {
  aberration: "COLDAM5E.CreatureAberration",
  beast: "COLDAM5E.CreatureBeast",
  celestial: "COLDAM5E.CreatureCelestial",
  construct: "COLDAM5E.CreatureConstruct",
  dragon: "COLDAM5E.CreatureDragon",
  elemental: "COLDAM5E.CreatureElemental",
  fey: "COLDAM5E.CreatureFey",
  fiend: "COLDAM5E.CreatureFiend",
  giant: "COLDAM5E.CreatureGiant",
  humanoid: "COLDAM5E.CreatureHumanoid",
  monstrosity: "COLDAM5E.CreatureMonstrosity",
  ooze: "COLDAM5E.CreatureOoze",
  plant: "COLDAM5E.CreaturePlant",
  undead: "COLDAM5E.CreatureUndead"
};

/* -------------------------------------------- */

/**
 * Classification types for item action types.
 * @enum {string}
 */
COLDAM5E.itemActionTypes = {
  mwak: "COLDAM5E.ActionMWAK",
  rwak: "COLDAM5E.ActionRWAK",
  msak: "COLDAM5E.ActionMSAK",
  rsak: "COLDAM5E.ActionRSAK",
  save: "COLDAM5E.ActionSave",
  heal: "COLDAM5E.ActionHeal",
  abil: "COLDAM5E.ActionAbil",
  util: "COLDAM5E.ActionUtil",
  other: "COLDAM5E.ActionOther"
};

/* -------------------------------------------- */

/**
 * Different ways in which item capacity can be limited.
 * @enum {string}
 */
COLDAM5E.itemCapacityTypes = {
  items: "COLDAM5E.ItemContainerCapacityItems",
  weight: "COLDAM5E.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * List of various item rarities.
 * @enum {string}
 */
COLDAM5E.itemRarity = {
  common: "COLDAM5E.ItemRarityCommon",
  uncommon: "COLDAM5E.ItemRarityUncommon",
  rare: "COLDAM5E.ItemRarityRare",
  veryRare: "COLDAM5E.ItemRarityVeryRare",
  legendary: "COLDAM5E.ItemRarityLegendary",
  artifact: "COLDAM5E.ItemRarityArtifact"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability.
 * @enum {string}
 */
COLDAM5E.limitedUsePeriods = {
  sr: "COLDAM5E.ShortRest",
  lr: "COLDAM5E.LongRest",
  day: "COLDAM5E.Day",
  charges: "COLDAM5E.Charges"
};

/* -------------------------------------------- */

/**
 * Specific equipment types that modify base AC.
 * @enum {string}
 */
COLDAM5E.armorTypes = {
  light: "COLDAM5E.EquipmentLight",
  medium: "COLDAM5E.EquipmentMedium",
  heavy: "COLDAM5E.EquipmentHeavy",
  natural: "COLDAM5E.EquipmentNatural",
  shield: "COLDAM5E.EquipmentShield"
};

/* -------------------------------------------- */

/**
 * Equipment types that aren't armor.
 * @enum {string}
 */
COLDAM5E.miscEquipmentTypes = {
  clothing: "COLDAM5E.EquipmentClothing",
  trinket: "COLDAM5E.EquipmentTrinket",
  vehicle: "COLDAM5E.EquipmentVehicle"
};

/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character.
 * @enum {string}
 */
COLDAM5E.equipmentTypes = {
  ...COLDAM5E.miscEquipmentTypes,
  ...COLDAM5E.armorTypes
};

/* -------------------------------------------- */

/**
 * The various types of vehicles in which characters can be proficient.
 * @enum {string}
 */
COLDAM5E.vehicleTypes = {
  air: "COLDAM5E.VehicleTypeAir",
  land: "COLDAM5E.VehicleTypeLand",
  water: "COLDAM5E.VehicleTypeWater"
};

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have.
 * @type {object}
 */
COLDAM5E.armorProficiencies = {
  lgt: COLDAM5E.equipmentTypes.light,
  med: COLDAM5E.equipmentTypes.medium,
  hvy: COLDAM5E.equipmentTypes.heavy,
  shl: "COLDAM5E.EquipmentShieldProficiency"
};

/**
 * A mapping between `COLDAM5E.equipmentTypes` and `COLDAM5E.armorProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
COLDAM5E.armorProficienciesMap = {
  natural: true,
  clothing: true,
  light: "lgt",
  medium: "med",
  heavy: "hvy",
  shield: "shl"
};

/**
 * The basic armor types in 5e. This enables specific armor proficiencies,
 * automated AC calculation in NPCs, and starting equipment.
 * @enum {string}
 */
COLDAM5E.armorIds = {
  breastplate: "SK2HATQ4abKUlV8i",
  chainmail: "rLMflzmxpe8JGTOA",
  chainshirt: "p2zChy24ZJdVqMSH",
  halfplate: "vsgmACFYINloIdPm",
  hide: "n1V07puo0RQxPGuF",
  leather: "WwdpHLXGX5r8uZu5",
  padded: "GtKV1b5uqFQqpEni",
  plate: "OjkIqlW2UpgFcjZa",
  ringmail: "nsXZejlmgalj4he9",
  scalemail: "XmnlF5fgIO3tg6TG",
  splint: "cKpJmsJmU8YaiuqG",
  studded: "TIV3B1vbrVHIhQAm"
};

/**
 * The basic shield in 5e.
 * @enum {string}
 */
COLDAM5E.shieldIds = {
  shield: "sSs3hSzkKBMNBgTs"
};

/**
 * Common armor class calculations.
 * @enum {{ label: string, [formula]: string }}
 */
COLDAM5E.armorClasses = {
  flat: {
    label: "COLDAM5E.ArmorClassFlat",
    formula: "@attributes.ac.flat"
  },
  natural: {
    label: "COLDAM5E.ArmorClassNatural",
    formula: "@attributes.ac.flat"
  },
  default: {
    label: "COLDAM5E.ArmorClassEquipment",
    formula: "@attributes.ac.base + @abilities.dex.mod"
  },
  mage: {
    label: "COLDAM5E.ArmorClassMage",
    formula: "13 + @abilities.dex.mod"
  },
  draconic: {
    label: "COLDAM5E.ArmorClassDraconic",
    formula: "13 + @abilities.dex.mod"
  },
  unarmoredMonk: {
    label: "COLDAM5E.ArmorClassUnarmoredMonk",
    formula: "10 + @abilities.dex.mod + @abilities.wis.mod"
  },
  unarmoredBarb: {
    label: "COLDAM5E.ArmorClassUnarmoredBarbarian",
    formula: "10 + @abilities.dex.mod + @abilities.con.mod"
  },
  custom: {
    label: "COLDAM5E.ArmorClassCustom"
  }
};

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system.
 * @enum {string}
 */
COLDAM5E.consumableTypes = {
  ammo: "COLDAM5E.ConsumableAmmunition",
  potion: "COLDAM5E.ConsumablePotion",
  poison: "COLDAM5E.ConsumablePoison",
  food: "COLDAM5E.ConsumableFood",
  scroll: "COLDAM5E.ConsumableScroll",
  wand: "COLDAM5E.ConsumableWand",
  rod: "COLDAM5E.ConsumableRod",
  trinket: "COLDAM5E.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations with localized labels, abbreviations, and conversions.
 * @enum {{
 *   label: string,
 *   abbreviation: string,
 *   [conversion]: {into: string, each: number}
 * }}
 */
COLDAM5E.currencies = {
  pp: {
    label: "COLDAM5E.CurrencyPP",
    abbreviation: "COLDAM5E.CurrencyAbbrPP"
  },
  gp: {
    label: "COLDAM5E.CurrencyGP",
    abbreviation: "COLDAM5E.CurrencyAbbrGP",
    conversion: {into: "pp", each: 10}
  },
  ep: {
    label: "COLDAM5E.CurrencyEP",
    abbreviation: "COLDAM5E.CurrencyAbbrEP",
    conversion: {into: "gp", each: 2}
  },
  sp: {
    label: "COLDAM5E.CurrencySP",
    abbreviation: "COLDAM5E.CurrencyAbbrSP",
    conversion: {into: "ep", each: 5}
  },
  cp: {
    label: "COLDAM5E.CurrencyCP",
    abbreviation: "COLDAM5E.CurrencyAbbrCP",
    conversion: {into: "sp", each: 10}
  }
};

/* -------------------------------------------- */

/**
 * Types of damage the can be caused by abilities.
 * @enum {string}
 */
COLDAM5E.damageTypes = {
  acid: "COLDAM5E.DamageAcid",
  bludgeoning: "COLDAM5E.DamageBludgeoning",
  cold: "COLDAM5E.DamageCold",
  fire: "COLDAM5E.DamageFire",
  force: "COLDAM5E.DamageForce",
  lightning: "COLDAM5E.DamageLightning",
  necrotic: "COLDAM5E.DamageNecrotic",
  piercing: "COLDAM5E.DamagePiercing",
  poison: "COLDAM5E.DamagePoison",
  psychic: "COLDAM5E.DamagePsychic",
  radiant: "COLDAM5E.DamageRadiant",
  slashing: "COLDAM5E.DamageSlashing",
  thunder: "COLDAM5E.DamageThunder"
};

/**
 * Types of damage to which an actor can possess resistance, immunity, or vulnerability.
 * @enum {string}
 */
COLDAM5E.damageResistanceTypes = {
  ...COLDAM5E.damageTypes,
  physical: "COLDAM5E.DamagePhysical"
};

/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
COLDAM5E.movementTypes = {
  burrow: "COLDAM5E.MovementBurrow",
  climb: "COLDAM5E.MovementClimb",
  fly: "COLDAM5E.MovementFly",
  swim: "COLDAM5E.MovementSwim",
  walk: "COLDAM5E.MovementWalk"
};

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
COLDAM5E.movementUnits = {
  ft: "COLDAM5E.DistFt",
  mi: "COLDAM5E.DistMi",
  m: "COLDAM5E.DistM",
  km: "COLDAM5E.DistKm"
};

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from `COLDAM5E.movementUnits`.
 * @enum {string}
 */
COLDAM5E.distanceUnits = {
  none: "COLDAM5E.None",
  self: "COLDAM5E.DistSelf",
  touch: "COLDAM5E.DistTouch",
  spec: "COLDAM5E.Special",
  any: "COLDAM5E.DistAny",
  ...COLDAM5E.movementUnits
};

/* -------------------------------------------- */

/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules.
 * @enum {{ imperial: number, metric: number }}
 */
COLDAM5E.encumbrance = {
  currencyPerWeight: {
    imperial: 50,
    metric: 110
  },
  strMultiplier: {
    imperial: 15,
    metric: 6.8
  },
  vehicleWeightMultiplier: {
    imperial: 2000, // 2000 lbs in an imperial ton
    metric: 1000 // 1000 kg in a metric ton
  }
};

/* -------------------------------------------- */

/**
 * The types of single or area targets which can be applied to abilities.
 * @enum {string}
 */
COLDAM5E.targetTypes = {
  none: "COLDAM5E.None",
  self: "COLDAM5E.TargetSelf",
  creature: "COLDAM5E.TargetCreature",
  ally: "COLDAM5E.TargetAlly",
  enemy: "COLDAM5E.TargetEnemy",
  object: "COLDAM5E.TargetObject",
  space: "COLDAM5E.TargetSpace",
  radius: "COLDAM5E.TargetRadius",
  sphere: "COLDAM5E.TargetSphere",
  cylinder: "COLDAM5E.TargetCylinder",
  cone: "COLDAM5E.TargetCone",
  square: "COLDAM5E.TargetSquare",
  cube: "COLDAM5E.TargetCube",
  line: "COLDAM5E.TargetLine",
  wall: "COLDAM5E.TargetWall"
};

/* -------------------------------------------- */

/**
 * Mapping between `COLDAM5E.targetTypes` and `MeasuredTemplate` shape types to define
 * which templates are produced by which area of effect target type.
 * @enum {string}
 */
COLDAM5E.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};

/* -------------------------------------------- */

/**
 * Different types of healing that can be applied using abilities.
 * @enum {string}
 */
COLDAM5E.healingTypes = {
  healing: "COLDAM5E.Healing",
  temphp: "COLDAM5E.HealingTemp"
};

/* -------------------------------------------- */

/**
 * Denominations of hit dice which can apply to classes.
 * @type {string[]}
 */
COLDAM5E.hitDieTypes = ["d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have.
 * @enum {string}
 */
COLDAM5E.senses = {
  blindsight: "COLDAM5E.SenseBlindsight",
  darkvision: "COLDAM5E.SenseDarkvision",
  tremorsense: "COLDAM5E.SenseTremorsense",
  truesight: "COLDAM5E.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained.
 * @enum {string}
 */
COLDAM5E.skills = {
  acr: "COLDAM5E.SkillAcr",
  ani: "COLDAM5E.SkillAni",
  ath: "COLDAM5E.SkillAth",
  dec: "COLDAM5E.SkillDec",
  his: "COLDAM5E.SkillHis",
  ins: "COLDAM5E.SkillIns",
  itm: "COLDAM5E.SkillItm",
  inv: "COLDAM5E.SkillInv",
  med: "COLDAM5E.SkillMed",
  prc: "COLDAM5E.SkillPrc",
  prf: "COLDAM5E.SkillPrf",
  per: "COLDAM5E.SkillPer",
  slt: "COLDAM5E.SkillSlt",
  ste: "COLDAM5E.SkillSte",
  sur: "COLDAM5E.SkillSur",
  mema: "COLDAM5E.SkillMema",
  sta: "COLDAM5E.SkillSta",
  pato: "COLDAM5E.SkillPato",
  ene: "COLDAM5E.SkillEne",
  sci: "COLDAM5E.SkillSci",
  com: "COLDAM5E.SkillCom",
  mem: "COLDAM5E.SkillMem"
};

/* -------------------------------------------- */

/**
 * Various different ways a spell can be prepared.
 */
COLDAM5E.spellPreparationModes = {
  prepared: "COLDAM5E.SpellPrepPrepared",
  pact: "COLDAM5E.PactMagic",
  always: "COLDAM5E.SpellPrepAlways",
  atwill: "COLDAM5E.SpellPrepAtWill",
  innate: "COLDAM5E.SpellPrepInnate"
};

/**
 * Subset of `COLDAM5E.spellPreparationModes` that consume spell slots.
 * @type {boolean[]}
 */
COLDAM5E.spellUpcastModes = ["always", "pact", "prepared"];

/**
 * Ways in which a class can contribute to spellcasting levels.
 * @enum {string}
 */
COLDAM5E.spellProgression = {
  none: "COLDAM5E.SpellNone",
  full: "COLDAM5E.SpellProgFull",
  half: "COLDAM5E.SpellProgHalf",
  third: "COLDAM5E.SpellProgThird",
  pact: "COLDAM5E.SpellProgPact",
  artificer: "COLDAM5E.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed.
 * @enum {string}
 */
COLDAM5E.spellScalingModes = {
  none: "COLDAM5E.SpellNone",
  cantrip: "COLDAM5E.SpellCantrip",
  level: "COLDAM5E.SpellLevel"
};

/* -------------------------------------------- */

/**
 * The set of types which a weapon item can take.
 * @enum {string}
 */
COLDAM5E.weaponTypes = {
  simpleM: "COLDAM5E.WeaponSimpleM",
  simpleR: "COLDAM5E.WeaponSimpleR",
  martialM: "COLDAM5E.WeaponMartialM",
  martialR: "COLDAM5E.WeaponMartialR",
  natural: "COLDAM5E.WeaponNatural",
  improv: "COLDAM5E.WeaponImprov",
  siege: "COLDAM5E.WeaponSiege"
};

/* -------------------------------------------- */

/**
 * The set of weapon property flags which can exist on a weapon.
 * @enum {string}
 */
COLDAM5E.weaponProperties = {
  ada: "COLDAM5E.WeaponPropertiesAda",
  amm: "COLDAM5E.WeaponPropertiesAmm",
  fin: "COLDAM5E.WeaponPropertiesFin",
  fir: "COLDAM5E.WeaponPropertiesFir",
  foc: "COLDAM5E.WeaponPropertiesFoc",
  hvy: "COLDAM5E.WeaponPropertiesHvy",
  lgt: "COLDAM5E.WeaponPropertiesLgt",
  lod: "COLDAM5E.WeaponPropertiesLod",
  mgc: "COLDAM5E.WeaponPropertiesMgc",
  rch: "COLDAM5E.WeaponPropertiesRch",
  rel: "COLDAM5E.WeaponPropertiesRel",
  ret: "COLDAM5E.WeaponPropertiesRet",
  sil: "COLDAM5E.WeaponPropertiesSil",
  spc: "COLDAM5E.WeaponPropertiesSpc",
  thr: "COLDAM5E.WeaponPropertiesThr",
  two: "COLDAM5E.WeaponPropertiesTwo",
  ver: "COLDAM5E.WeaponPropertiesVer"
};

/**
 * Types of components that can be required when casting a spell.
 * @enum {string}
 */
COLDAM5E.spellComponents = {
  V: "COLDAM5E.ComponentVerbal",
  S: "COLDAM5E.ComponentSomatic",
  M: "COLDAM5E.ComponentMaterial"
};

/**
 * Schools to which a spell can belong.
 * @enum {string}
 */
COLDAM5E.spellSchools = {
  abj: "COLDAM5E.SchoolAbj",
  con: "COLDAM5E.SchoolCon",
  div: "COLDAM5E.SchoolDiv",
  enc: "COLDAM5E.SchoolEnc",
  evo: "COLDAM5E.SchoolEvo",
  ill: "COLDAM5E.SchoolIll",
  nec: "COLDAM5E.SchoolNec",
  trs: "COLDAM5E.SchoolTrs"
};

/**
 * Valid spell levels.
 * @enum {string}
 */
COLDAM5E.spellLevels = {
  0: "COLDAM5E.SpellLevel0",
  1: "COLDAM5E.SpellLevel1",
  2: "COLDAM5E.SpellLevel2",
  3: "COLDAM5E.SpellLevel3",
  4: "COLDAM5E.SpellLevel4",
  5: "COLDAM5E.SpellLevel5",
  6: "COLDAM5E.SpellLevel6",
  7: "COLDAM5E.SpellLevel7",
  8: "COLDAM5E.SpellLevel8",
  9: "COLDAM5E.SpellLevel9"
};

/**
 * Spell scroll item ID within the `COLDAM5E.sourcePacks` compendium for each level.
 * @enum {string}
 */
COLDAM5E.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
COLDAM5E.sourcePacks = {
  ITEMS: "coldam5e.items"
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {number[][]}
 */
COLDAM5E.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

/**
 * Settings to configure how actors are merged when polymorphing is applied.
 * @enum {string}
 */
COLDAM5E.polymorphSettings = {
  keepPhysical: "COLDAM5E.PolymorphKeepPhysical",
  keepMental: "COLDAM5E.PolymorphKeepMental",
  keepSaves: "COLDAM5E.PolymorphKeepSaves",
  keepSkills: "COLDAM5E.PolymorphKeepSkills",
  mergeSaves: "COLDAM5E.PolymorphMergeSaves",
  mergeSkills: "COLDAM5E.PolymorphMergeSkills",
  keepClass: "COLDAM5E.PolymorphKeepClass",
  keepFeats: "COLDAM5E.PolymorphKeepFeats",
  keepSpells: "COLDAM5E.PolymorphKeepSpells",
  keepItems: "COLDAM5E.PolymorphKeepItems",
  keepBio: "COLDAM5E.PolymorphKeepBio",
  keepVision: "COLDAM5E.PolymorphKeepVision"
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels.
 * The key for each level represents its proficiency multiplier.
 * @enum {string}
 */
COLDAM5E.proficiencyLevels = {
  0: "COLDAM5E.NotProficient",
  1: "COLDAM5E.Proficient",
  0.5: "COLDAM5E.HalfProficient",
  2: "COLDAM5E.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object. In cases where multiple pieces
 * of cover are in play, we take the highest value.
 * @enum {string}
 */
COLDAM5E.cover = {
  0: "COLDAM5E.None",
  .5: "COLDAM5E.CoverHalf",
  .75: "COLDAM5E.CoverThreeQuarters",
  1: "COLDAM5E.CoverTotal"
};

/* -------------------------------------------- */

/**
 * A selection of actor attributes that can be tracked on token resource bars.
 * @type {string[]}
 */
COLDAM5E.trackableAttributes = [
  "attributes.ac.value", "attributes.init.value", "attributes.movement", "attributes.senses", "attributes.spelldc",
  "attributes.spellLevel", "details.cr", "details.spellLevel", "details.xp.value", "skills.*.passive",
  "abilities.*.value"
];

/* -------------------------------------------- */

/**
 * A selection of actor and item attributes that are valid targets for item resource consumption.
 * @type {string[]}
 */
COLDAM5E.consumableResources = [
  "item.quantity", "item.weight", "item.duration.value", "currency", "details.xp.value", "abilities.*.value",
  "attributes.senses", "attributes.movement", "attributes.ac.flat", "item.armor.value", "item.target", "item.range",
  "item.save.dc"
];

/* -------------------------------------------- */

/**
 * Conditions that can effect an actor.
 * @enum {string}
 */
COLDAM5E.conditionTypes = {
  blinded: "COLDAM5E.ConBlinded",
  charmed: "COLDAM5E.ConCharmed",
  deafened: "COLDAM5E.ConDeafened",
  diseased: "COLDAM5E.ConDiseased",
  exhaustion: "COLDAM5E.ConExhaustion",
  frightened: "COLDAM5E.ConFrightened",
  grappled: "COLDAM5E.ConGrappled",
  incapacitated: "COLDAM5E.ConIncapacitated",
  invisible: "COLDAM5E.ConInvisible",
  paralyzed: "COLDAM5E.ConParalyzed",
  petrified: "COLDAM5E.ConPetrified",
  poisoned: "COLDAM5E.ConPoisoned",
  prone: "COLDAM5E.ConProne",
  restrained: "COLDAM5E.ConRestrained",
  stunned: "COLDAM5E.ConStunned",
  unconscious: "COLDAM5E.ConUnconscious"
};

/**
 * Languages a character can learn.
 * @enum {string}
 */
COLDAM5E.languages = {
  common: "COLDAM5E.LanguagesCommon",
  aarakocra: "COLDAM5E.LanguagesAarakocra",
  abyssal: "COLDAM5E.LanguagesAbyssal",
  aquan: "COLDAM5E.LanguagesAquan",
  auran: "COLDAM5E.LanguagesAuran",
  celestial: "COLDAM5E.LanguagesCelestial",
  deep: "COLDAM5E.LanguagesDeepSpeech",
  draconic: "COLDAM5E.LanguagesDraconic",
  druidic: "COLDAM5E.LanguagesDruidic",
  dwarvish: "COLDAM5E.LanguagesDwarvish",
  elvish: "COLDAM5E.LanguagesElvish",
  giant: "COLDAM5E.LanguagesGiant",
  gith: "COLDAM5E.LanguagesGith",
  gnomish: "COLDAM5E.LanguagesGnomish",
  goblin: "COLDAM5E.LanguagesGoblin",
  gnoll: "COLDAM5E.LanguagesGnoll",
  halfling: "COLDAM5E.LanguagesHalfling",
  ignan: "COLDAM5E.LanguagesIgnan",
  infernal: "COLDAM5E.LanguagesInfernal",
  orc: "COLDAM5E.LanguagesOrc",
  primordial: "COLDAM5E.LanguagesPrimordial",
  sylvan: "COLDAM5E.LanguagesSylvan",
  terran: "COLDAM5E.LanguagesTerran",
  cant: "COLDAM5E.LanguagesThievesCant",
  undercommon: "COLDAM5E.LanguagesUndercommon"
};

/**
 * XP required to achieve each character level.
 * @type {number[]}
 */
COLDAM5E.CHARACTER_EXP_LEVELS = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
];

/**
 * XP granted for each challenge rating.
 * @type {number[]}
 */
COLDAM5E.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

/**
 * Character features automatically granted by classes & subclasses at certain levels.
 * @type {object}
 */
COLDAM5E.classFeatures = ClassFeatures;

/**
 * Special character flags.
 * @enum {{
 *   name: string,
 *   hint: string,
 *   [abilities]: string[],
 *   [skills]: string[],
 *   section: string,
 *   type: any,
 *   placeholder: any
 * }}
 */
COLDAM5E.characterFlags = {
  diamondSoul: {
    name: "COLDAM5E.FlagsDiamondSoul",
    hint: "COLDAM5E.FlagsDiamondSoulHint",
    section: "COLDAM5E.Feats",
    type: Boolean
  },
  elvenAccuracy: {
    name: "COLDAM5E.FlagsElvenAccuracy",
    hint: "COLDAM5E.FlagsElvenAccuracyHint",
    section: "COLDAM5E.RacialTraits",
    type: Boolean
  },
  halflingLucky: {
    name: "COLDAM5E.FlagsHalflingLucky",
    hint: "COLDAM5E.FlagsHalflingLuckyHint",
    section: "COLDAM5E.RacialTraits",
    type: Boolean
  },
  initiativeAdv: {
    name: "COLDAM5E.FlagsInitiativeAdv",
    hint: "COLDAM5E.FlagsInitiativeAdvHint",
    section: "COLDAM5E.Feats",
    type: Boolean
  },
  initiativeAlert: {
    name: "COLDAM5E.FlagsAlert",
    hint: "COLDAM5E.FlagsAlertHint",
    section: "COLDAM5E.Feats",
    type: Boolean
  },
  jackOfAllTrades: {
    name: "COLDAM5E.FlagsJOAT",
    hint: "COLDAM5E.FlagsJOATHint",
    section: "COLDAM5E.Feats",
    type: Boolean
  },
  observantFeat: {
    name: "COLDAM5E.FlagsObservant",
    hint: "COLDAM5E.FlagsObservantHint",
    skills: ["prc", "inv"],
    section: "COLDAM5E.Feats",
    type: Boolean
  },
  powerfulBuild: {
    name: "COLDAM5E.FlagsPowerfulBuild",
    hint: "COLDAM5E.FlagsPowerfulBuildHint",
    section: "COLDAM5E.RacialTraits",
    type: Boolean
  },
  reliableTalent: {
    name: "COLDAM5E.FlagsReliableTalent",
    hint: "COLDAM5E.FlagsReliableTalentHint",
    section: "COLDAM5E.Feats",
    type: Boolean
  },
  remarkableAthlete: {
    name: "COLDAM5E.FlagsRemarkableAthlete",
    hint: "COLDAM5E.FlagsRemarkableAthleteHint",
    abilities: ["str", "dex", "con"],
    section: "COLDAM5E.Feats",
    type: Boolean
  },
  weaponCriticalThreshold: {
    name: "COLDAM5E.FlagsWeaponCritThreshold",
    hint: "COLDAM5E.FlagsWeaponCritThresholdHint",
    section: "COLDAM5E.Feats",
    type: Number,
    placeholder: 20
  },
  spellCriticalThreshold: {
    name: "COLDAM5E.FlagsSpellCritThreshold",
    hint: "COLDAM5E.FlagsSpellCritThresholdHint",
    section: "COLDAM5E.Feats",
    type: Number,
    placeholder: 20
  },
  meleeCriticalDamageDice: {
    name: "COLDAM5E.FlagsMeleeCriticalDice",
    hint: "COLDAM5E.FlagsMeleeCriticalDiceHint",
    section: "COLDAM5E.Feats",
    type: Number,
    placeholder: 0
  }
};

/**
 * Flags allowed on actors. Any flags not in the list may be deleted during a migration.
 * @type {string[]}
 */
COLDAM5E.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(COLDAM5E.characterFlags));
