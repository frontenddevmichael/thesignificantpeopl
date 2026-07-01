export default function Container({ children, narrow }) {
  return (
    <div
      style={{
        maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
        paddingInline: 'var(--container-padding)',
        marginInline: 'auto',
      }}
    >
      {children}
    </div>
  );
}
