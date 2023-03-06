package cn.crane4j.annotation.extension;

import cn.crane4j.annotation.Assemble;
import cn.crane4j.annotation.Mapping;
import cn.crane4j.annotation.MappingTemplate;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author huangchengxing
 */
@Repeatable(value = AssembleMulti.List.class)
@Documented
@Target({ElementType.ANNOTATION_TYPE, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Assemble(handlerName = "multiKeyAssembleOperationHandler")
public @interface AssembleMulti {

    /**
     * Sort values.
     * The lower the value, the higher the priority.
     *
     * @return sort values
     */
    int sort() default Integer.MAX_VALUE;

    /**
     * <p>Field name of key.
     * This field value will be used to obtain the associated
     * data source object from the data source container later.
     * <p>When the annotation is on the attribute,
     * it will be forced to specify the name of the annotated attribute.
     *
     * @return field name of key
     */
    String key() default "";

    /**
     * The namespace of the data source container to be used.
     *
     * @return namespace
     */
    String container() default "";

    /**
     * The type of the container provider to be used.
     *
     * @return container factory type
     */
    Class<?> containerProvider() default Object.class;

    /**
     * The name of the container provider to be used.
     *
     * @return container factory name
     */
    String containerProviderName() default "";

    /**
     * Attributes that need to be mapped
     * between the data source object and the current object.
     *
     * @return attributes
     * @see #propTemplates()
     */
    Mapping[] props() default { };

    /**
     * <p>Mapping template classes.
     * specify a class, if {@link MappingTemplate} exists on the class,
     * it will scan and add {@link Mapping} to {@link #props()}。
     *
     * @return mapping templates
     */
    Class<?>[] propTemplates() default {};

    /**
     * The group to which the current operation belongs.
     *
     * @return groups
     */
    String[] groups() default {};

    /**
     * Batch operation.
     *
     * @author huangchengxing
     */
    @Documented
    @Target({ElementType.FIELD, ElementType.ANNOTATION_TYPE})
    @Retention(RetentionPolicy.RUNTIME)
    @interface List {
        AssembleMulti[] value() default {};
    }
}
