---
type: ProjectFeedLayout
title: Projekte
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 50
projectFeed:
  type: ProjectFeedSection
  colors: colors-f
  showDate: false
  showDescription: true
  showReadMoreLink: true
  showFeaturedImage: true
  variant: variant-a
  styles:
    self:
      width: narrow
      padding:
        - pt-0
        - pl-4
        - pr-4
        - pb-12
topSections:
  - type: HeroSection
    title: Projekte
    subtitle: ''
    actions: []
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-16
          - pb-16
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: left
bottomSections:
  - type: ContactSection
    backgroundSize: full
    title: "Melde dich doch bei mir \U0001F4AC"
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: vorname
          label: Vorname
          hideLabel: true
          placeholder: Vorname
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: nachname
          label: Nachname
          hideLabel: true
          placeholder: Nachname
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: E-Mail
          hideLabel: true
          placeholder: E-Mail
          isRequired: true
          width: full
          type: EmailFormControl
        - name: nachricht
          label: Nachricht
          hideLabel: true
          placeholder: Erzähl mir von deinem Projekt
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: "Los geht's \U0001F680"
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
