export const S_IFMT=0o0170000
export const S_IFSOCK=0o140000
export const S_IFLNK=0o120000
export const S_IFREG=0o100000
export const S_IFBLK=0o060000
export const S_IFDIR=0o040000
export const S_IFCHR=0o020000
export const S_IFIFO=0o010000
export const S_ISUID=0o004000
export const S_ISGID=0o002000
export const S_ISVTX=0o001000

export const S_ISLNK=(m)=>(((m) & S_IFMT) === S_IFLNK)
export const S_ISREG=(m)=>(((m) & S_IFMT) === S_IFREG)
export const S_ISDIR=(m)=>(((m) & S_IFMT) === S_IFDIR)
export const S_ISCHR=(m)=>(((m) & S_IFMT) === S_IFCHR)
export const S_ISBLK=(m)=>(((m) & S_IFMT) === S_IFBLK)
export const S_ISFIFO=(m)=>(((m) & S_IFMT) === S_IFIFO)
export const S_ISSOCK=(m)=>(((m) & S_IFMT) === S_IFSOCK)

export const S_IRWXU=0o0700
export const S_IRUSR=0o0400
export const S_IWUSR=0o0200
export const S_IXUSR=0o0100
export const S_IRWXG=0o0070
export const S_IRGRP=0o0040
export const S_IWGRP=0o0020
export const S_IXGRP=0o0010
export const S_IRWXO=0o0007
export const S_IROTH=0o0004
export const S_IWOTH=0o0002
export const S_IXOTH=0o0001